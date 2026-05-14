import PageIntro from "../../components/PageIntro";
import ImageCarousel from "../../components/ImageCarousel";
import "../../stylesheets/ProjectPage.css"

export function SplunkSSHBlog() {

    const introDetails = {
        projectTitle: "SSH Brute Force Investigation with Splunk",
        readTime: "5 minute read",
        columnTitles: ["Type📁", "Tools Used🛠️", "Skills Applied🧠"],
        columnRowsInfo: [
            ["Log Analysis", "Threat Detection"],
            ["Splunk", "VirusTotal", "AbuseIPDB"],
            ["SIEM / SPL", "Regex Field Extraction", "Brute Force Detection", "Threat Hunting", "IOC Enrichment", "Attack Attribution"]
        ],
        linkColTitles: ["Data Source🌐"],
        linkColLinks: [["https://www.secrepo.com/auth.log/auth.log.gz"]],
        linkTexts: [["SecRepo auth.log→"]],
        introText: [
            "I loaded a <strong>real-world Linux auth.log file</strong> (~86,000 events) into Splunk and conducted a structured SSH brute force investigation from scratch, playing the role of an SOC analyst handed a suspicious log file with no prior context. Working through seven investigation phases, I wrote all SPL queries from scratch, performed manual regex field extraction, and synthesized findings into actionable security recommendations.",
            "The dataset comes from <strong>SecRepo</strong>, a repository of real security-relevant data. The auth.log spans ~30 days of live SSH traffic. This includes real scanners, real IPs, real attack patterns. Unlike CTF labs with a guided finish line, this investigation required me to <strong>define my own questions, build my own queries, and interpret ambiguous results</strong>."
        ],
    };

    // ── Screenshot arrays ── fill in paths as you capture them ──────────────
    const setupImages = [
        "/images/Blog_Images/SplunkSSH/1_source_type_config.png",
        "/images/Blog_Images/SplunkSSH/2_index_config.png",
        "/images/Blog_Images/SplunkSSH/3_upload_review.png",
    ];
    const setupCaptions = [
        "Configuring the linux_auth source type in Splunk",
        "Creating the ssh_investigation index",
        "Final ingestion review before submitting",
    ];

    const orientationImages = [
        "/images/Blog_Images/SplunkSSH/4_message_type_breakdown.png",
    ];
    const orientationCaptions = [
        "SPL catch-all query surfacing all message categories — zero success events anywhere in the dataset",
    ];

    const reconImages = [
        "/images/Blog_Images/SplunkSSH/5_top_attacking_ips.png",
        "/images/Blog_Images/SplunkSSH/6_top_attacker_timechart.png",
    ];
    const reconCaptions = [
        "Top 10 attacking IPs by attempt count",
        "Hourly activity for the top attacker — ~2,000 attempts/hour over 6 hours on Dec 6",
    ];

    const targetImages = [
        "/images/Blog_Images/SplunkSSH/7_top_targeted_usernames.png",
    ];
    const targetCaptions = [
        "Top 10 most targeted usernames — a default-credentials dictionary, not personalized guesses",
    ];

    const detectionImages = [
        "/images/Blog_Images/SplunkSSH/8_attack_timeline_timechart.png",
    ];
    const detectionCaptions = [
        "Hourly timechart of invalid user attempts — clear discrete spikes, not constant background noise",
    ];

    const enrichmentImages = [
        "/images/Blog_Images/SplunkSSH/9_geo_distribution.png",
        "/images/Blog_Images/SplunkSSH/10_avg_seconds_between_attempts.png",
    ];
    const enrichmentCaptions = [
        "Geographic distribution of top attacking IPs via Splunk's iplocation command",
        "Average seconds between attempts for the top 4 IPs — all under 10 seconds, confirming automation",
    ];

    return (
        <>
            <div className="project-page-container">
                <PageIntro {...introDetails} />


                {/* ── KEY FINDINGS ─────────────────────────────────────────── */}
                <h1>Key Findings at a Glance</h1>
                <ul>
                    <li><strong>86,839 events over 30 days (~120/hour)</strong> <span className="inline-note">— volume alone signals automated attack pressure, not human activity</span></li>
                    <li><strong>Zero successful logins</strong> <span className="inline-note">— no accounts were compromised within the scope of this dataset</span></li>
                    <li><strong>100% "Invalid user" events, zero "Failed password" events</strong> <span className="inline-note">— the logs captured pure SSH username enumeration, not a password phase</span></li>
                    <li><strong>Top 3 IPs generated ~30% of all attempts</strong> <span className="inline-note">— a concentrated minority of aggressive scanners within a distributed crowd of 2,607 unique IPs</span></li>
                    <li><strong>Top 4 IPs had identical attempt counts and username diversity</strong> <span className="inline-note">— strong indicator of a shared automated tool or coordinated botnet</span></li>
                    <li><strong>Geographically distributed across Spain, China, Japan, the US, and the UK</strong> <span className="inline-note">— opportunistic internet-wide scanning, not a targeted attack</span></li>
                </ul>



                {/* ── SETUP ────────────────────────────────────────────────── */}
                <h1>Setup — Getting the Data into Splunk</h1>
                <p>
                    I sourced a real Linux  <code>auth.log</code> file from&nbsp;
                    <a href="https://www.secrepo.com/" target="_blank" rel="noopener noreferrer">
                        SecRepo
                    </a>
                    &nbsp;(~86,000 lines of live SSH authentication data) and ingested it into Splunk with the following configuration:
                    <ul>
                        <li><strong>Source type:</strong> <span className="inline-code">linux_auth</span></li>
                        <li><strong>Index:</strong> <span className="inline-code">ssh_investigation</span></li>
                        <li><strong>Host field:</strong> <span className="inline-code">secrepo-authlog</span></li>
                    </ul>
                </p>
                <p>
                    Raw <span className="inline-code">auth.log</span> events aren't automatically field-extracted by Splunk. Fields like <span className="inline-code">src_ip</span> and <span className="inline-code">username</span> had to be pulled manually using <span className="inline-code">rex</span> with regex patterns throughout the investigation. Writing those extractions cleanly and reusing them consistently across queries became one of the core skills practiced here.
                </p>
                <ImageCarousel carouselImages={setupImages} captions={setupCaptions} />


                {/* ── PHASE 1 ──────────────────────────────────────────────── */}
                <h1>Phase 1: Orientation — Understanding the Shape of the Data</h1>
                <p>
                    <strong>Finding:</strong> The dataset contained 86,839 events (~120/hour over 30 days). That volume alone indicates automated attack pressure. Real users don't generate 120 auth events per hour, but scanning tools do.
                </p>
                <p>
                    To categorize what types of events were present, I wrote a catch-all SPL query using <code>rex</code> to extract and count the first meaningful words from each <code>sshd</code> log message:
                </p>
                <pre className="spl-block">{
                    `index=ssh_investigation sourcetype=linux_auth
| rex field=_raw "sshd\\[\\d+\\]: (?<message_type>[A-Z][a-z]+\\s?[a-z]*)"
| stats count by message_type
| sort -count`
                }</pre>
                <p>
                    The results surfaced nine distinct message categories and a critical absence: <strong>zero "Failed password" events, zero "Accepted password" or "Accepted publickey" events</strong>. This reframed the entire investigation. We can see the logs had captured the pre-authentication phase only, specifically <strong>SSH username enumeration</strong>, occurring before the password challenge ever takes place.
                </p>
                <ImageCarousel carouselImages={orientationImages} captions={orientationCaptions} />
                <span className="note">Splunk's Patterns tab can surface a similar breakdown automatically, but lacks user-defined precision.</span>

                {/* ── PHASE 2 ──────────────────────────────────────────────── */}
                <h1>Phase 2: Reconnaissance — Who Was Attacking?</h1>
                <p>
                    <strong>Finding:</strong> 2,607 unique source IPs appeared in the logs, but the distribution was heavily skewed — ~80% of IPs made fewer than 10 Invalid user attempts across the entire month, while a small minority were far more aggressive. The mean attempt count per IP was 23, but the median was just 3.
                </p>

                <div className="image-container">
                    <img src="/images/Blog_Images/WarehouseNetworkRack/diagrams/network_diagram_lr.svg" alt="High-level network diagram of the full deployment" className="project-images-large"></img>
                </div>

                <p>
                    Since the attack being investigated is SSH scanning and credential probing, I focused on <strong>Invalid user events specifically</strong> rather than total event volume per IP — raw event counts include TCP connection overhead like pre-auth disconnects, which inflate numbers without reflecting actual attack activity.
                </p>
                <p>
                    Filtering to Invalid user attempts only and ranking by IP:
                </p>
                <pre className="spl-block">{
                    `index=ssh_investigation sourcetype=linux_auth
| rex "Invalid user (?<username>\\S+)"
| where isnotnull(username)
| rex "from (?<src_ip>\\d+\\.\\d+\\.\\d+\\.\\d+)"
| stats count as attempts by src_ip
| sort -attempts`
                }</pre>
                <p>
                    Four IPs were tied at the top with <strong>409 Invalid user attempts each</strong>: 61.197.203.243, 220.99.93.50, 218.25.17.234, and 188.87.35.25. To confirm these were automated tools rather than manual activity, I calculated the average time between attempts for each using <code>streamstats</code>:
                </p>
                <pre className="spl-block">{
                    `index=ssh_investigation sourcetype=linux_auth "61.197.203.243"
| rex "Invalid user (?<username>\\S+)"
| where isnotnull(username)
| sort 0 _time
| streamstats current=f last(_time) as previous_time
| eval seconds_between=_time - previous_time
| stats avg(seconds_between) as avg_seconds_between_attempts`
                }</pre>
                <p>
                    Results across the four tied IPs:
                    <ul>
                        <li><strong>188.87.35.25</strong> — 5.57 seconds average between attempts</li>
                        <li><strong>61.197.203.243</strong> — 5.62 seconds average between attempts</li>
                        <li><strong>218.25.17.234</strong> — 8.69 seconds average between attempts</li>
                        <li><strong>220.99.93.50</strong> — 31.34 seconds average between attempts</li>
                    </ul>
                    Three of the four IPs were firing attempts every 5–9 seconds across hundreds of attempts. No human produces so many consistent failed attempts, so these are automated scanning tools.
                </p>
                <ImageCarousel carouselImages={reconImages} captions={reconCaptions} />


                {/* ── PHASE 3 ──────────────────────────────────────────────── */}
                <h1>Phase 3: Target Analysis — What Were They After?</h1>
                <p>
                    <strong>Finding:</strong> The top targeted usernames — admin, test, guest, oracle, ftp, ftpuser, D-Link, nagios, debug — are factory-default and well-known service account names, not personalized guesses. Only 541 unique usernames were ever attempted across the entire dataset: the same recycled wordlist replayed by hundreds of different IPs.
                </p>
                <p>
                    Query used to rank targeted usernames, with deduplication to avoid inflating counts from the same IP retrying the same username:
                </p>
                <pre className="spl-block">{
                    `index=ssh_investigation sourcetype=linux_auth
| rex "Invalid user (?<username>\\S+)"
| rex "invalid user (?<username2>\\S+)"
| eval username=coalesce(username, username2)
| where isnotnull(username)
| rex "from (?<src_ip>\\d+\\.\\d+\\.\\d+\\.\\d+)"
| dedup username src_ip _time
| stats count by username
| sort -count`
                }</pre>
                <ImageCarousel carouselImages={targetImages} captions={targetCaptions} />


                {/* ── PHASE 4 ──────────────────────────────────────────────── */}
                <h1>Phase 4: Detection — Building Brute Force Alert Logic</h1>
                <p>
                    <strong>Finding:</strong> 221 IPs crossed a simple 10-attempt threshold. Tightening to a <strong>time-windowed rule (10+ attempts within any 5-minute window)</strong> flagged 199 IPs. This is a more meaningful signal, since no legitimate user should fail login 10 times in 5 minutes.
                </p>
                <p>
                    Simple threshold — raw failed attempts per IP:
                </p>
                <pre className="spl-block">{
                    `index=ssh_investigation sourcetype=linux_auth
| rex "Invalid user (?<username>\\S+)"
| where isnotnull(username)
| rex "from (?<src_ip>\\d+\\.\\d+\\.\\d+\\.\\d+)"
| stats count as attempts by src_ip
| where attempts > 10
| sort -attempts`
                }</pre>
                <p>
                    Time-windowed threshold — more meaningful for real-time alerting:
                </p>
                <pre className="spl-block">{
                    `index=ssh_investigation sourcetype=linux_auth
| rex "Invalid user (?<username>\\S+)"
| where isnotnull(username)
| rex "from (?<src_ip>\\d+\\.\\d+\\.\\d+\\.\\d+)"
| bin _time span=5m
| stats count as attempts by src_ip _time
| where attempts > 10
| stats dc(src_ip) as suspicious_ip_count`
                }</pre>
                <p>
                    The attack timeline showed <strong>clear discrete spikes rather than constant background noise</strong>, clustered across a 4-day window — consistent with scheduled or intermittent bot runs.
                </p>
                <ImageCarousel carouselImages={detectionImages} captions={detectionCaptions} />


                {/* ── PHASE 5 ──────────────────────────────────────────────── */}
                <h1>Phase 5: Were Any Accounts Compromised?</h1>
                <p>
                    <strong>Finding: Zero successful logins in the dataset.</strong> No "Accepted password,"
                    no "Accepted publickey," no <code>pam_unix(sshd:session): session opened</code> events
                    anywhere across 86,839 lines.
                </p>
                <p>
                    As established in Phase 1, this dataset only captures pre-authentication activity, so
                    what happened after any successful login — lateral movement, persistence, file access —
                    would not appear here. The most accurate conclusion is: <strong>no compromise is visible
                        within the scope of this data.</strong>
                </p>


                {/* ── PHASE 6 ──────────────────────────────────────────────── */}
                <h1>Phase 6: Enrichment — Threat Intelligence and Geolocation</h1>
                <p>
                    <strong>Finding:</strong> Attack traffic originated from Spain, China, Japan, the US, and the UK — ruling out a localized or targeted attack. The top 4 IPs had <strong>identical attempt counts and identical username diversity</strong>, a strong indicator of shared tooling or a coordinated botnet.
                </p>
                <p>
                    Geographic distribution via Splunk's built-in <code>iplocation</code> command:
                </p>
                <pre className="spl-block">{
                    `index=ssh_investigation sourcetype=linux_auth
| rex "Invalid user (?<username>\\S+)"
| where isnotnull(username)
| rex "from (?<src_ip>\\d+\\.\\d+\\.\\d+\\.\\d+)"
| stats count as attempts by src_ip
| iplocation src_ip
| stats sum(attempts) as total_attempts by Country
| sort -total_attempts`
                }</pre>
                <p>
                    Checking the top IPs against VirusTotal and AbuseIPDB returned no high-confidence malicious flags — only sparse single-user reports. This isn't reassuring; it reflects <strong>transient rotating infrastructure</strong> used specifically to stay under reputation-based blocklist thresholds. The IPs appear "clean" because they've already moved on before reports accumulate.
                </p>
                <ImageCarousel carouselImages={enrichmentImages} captions={enrichmentCaptions} />


                {/* ── SYNTHESIS ────────────────────────────────────────────── */}
                <h1>Synthesis — What Actually Happened</h1>
                <p>
                    Over 30 days, this Linux system was subjected to <strong>continuous, automated SSH username enumeration from ~2,600 unique IPs distributed globally</strong>. The majority made only a handful of attempts — broad low-volume internet-wide crawling — while a concentrated subset of high-volume IPs conducted sustained campaigns lasting hours at a time.
                </p>
                <p>
                    All recorded activity was pre-authentication. The attackers were <strong>validating which usernames exist on the system</strong> — likely as reconnaissance for a password spraying phase that would occur separately, against already-confirmed valid accounts. The targeted usernames (admin, test, ftp, D-Link, nagios) are default and vendor-specific names, not personalized guesses. This was <strong>opportunistic internet-wide scanning, not a targeted attack</strong>. No accounts were successfully accessed within the scope of this dataset.
                </p>

                <h2>Security Recommendations</h2>
                <p>
                    If this were a production server, the evidence supports five specific controls:
                    <ul>
                        <li><strong>Disable password authentication entirely — require SSH keys.</strong> Every attack targeted password-based access. Key-based auth renders the entire attack surface irrelevant.</li>
                        <li><strong>Deploy fail2ban or IP rate-limiting.</strong> 199 IPs exceeded 10 failed attempts within 5 minutes. An automated ban after 5 failures in 60 seconds blocks enumeration before it gathers useful data.</li>
                        <li><strong>Move SSH off port 22.</strong> The "Bad protocol version 'GET / HTTP/1.0'" events show scanners probing port 22 reflexively — many tools only target the default port.</li>
                        <li><strong>Remove default service accounts.</strong> admin, test, guest, ftp, oracle should not exist on a hardened system. Their absence collapses the effective wordlist.</li>
                        <li><strong>Implement a live time-windowed SIEM alert.</strong> A Splunk alert on &gt;10 "Invalid user" events from a single IP within 5 minutes would have flagged 199 IPs in this dataset in near-real-time.</li>
                    </ul>
                </p>


                {/* ── REFLECTION ───────────────────────────────────────────── */}
                <h1>Reflection</h1>
                <p>
                    The most transferable skill this lab built wasn't knowing how to run Splunk — it was practicing the <strong>investigative workflow itself</strong>: orient, profile, detect, enrich, conclude. Every finding started with a hypothesis, a query to test it, and an interpretation of the results — including the ambiguous ones.
                </p>
                <p>
                    Things I'd extend with more time or data:
                    <ul>
                        <li><strong>Cross-reference with network flow data</strong> to confirm what the pre-auth logs imply but can't prove about post-connection activity</li>
                        <li><strong>Investigate IPs with burst-quiet-burst patterns</strong> — a potential signal of rate-limit evasion or distributed botnet behavior</li>
                        <li><strong>Build and deploy a live saved alert in Splunk</strong> with a configured webhook or email action, closing the loop from detection logic to operational response</li>
                    </ul>
                </p>
            </div>
        </>
    )
}

export default SplunkSSHBlog;