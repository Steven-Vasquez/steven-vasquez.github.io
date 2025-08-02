import BlogPageIntro from "../../components/BlogPageIntro";
import ImageCarousel from "../../components/ImageCarousel";
import "../../stylesheets/ProjectPage.css"

export function DanaBotBlog() {
    const introDetails = {
        projectTitle: "DanaBot",
        readTime: "2.5 minute read",
        introText: ["In this lab, hosted on CyberDefenders, I <strong>investigated a packet capture</strong> (PCAP) file from a network infected with DanaBot. The objective was to analyze network traffic to <strong>identify the infection vector</strong>, <strong>extract indicators of compromise</strong> (IOCs), and <strong>understand the malware’s behavior</strong> through hands-on network forensics.",
            "DanaBot is a <strong>modular trojan malware</strong> (modular meaning it's capabilities can be extented through downloadable components) used to steal sensitive information, often targeting financial data. First observed in 2018, DanaBot became a threat globally by communicating with attackers’ remote command-and-control (C2) servers after infecting a system, enabling it to exfiltrate credentials, download additional payloads, and maintain persistent access. <strong>Infecting over 300k computers worldwide, losses totaled at over $50 million in damages</strong>."
        ],
        labType: "Network Analysis",
        tacticsUsed: ["Execution", "Command and Control"],
        toolsUsed: ["Wireshark", "VirusTotal", "ANY.RUN", "Kali Linux"],
        labSource: "CyberDefenders",
        labLink: "https://cyberdefenders.org/blueteam-ctf-challenges/danabot/"
    }

    // Images used for identifying the attacker IP and DNS server
    const whatIDiscoveredImages = [
        "/images/Blog_Images/DanaBot/1_identifying_suspicious_DNS_server.png",
        "/images/Blog_Images/DanaBot/2_identifying_malicious_IP.png"
    ]
    const whatIDiscoveredCaptions = [
        "Identifying the suspicious DNS server used by the attacker using WireShark",
        "Confirming the malicious IP address used by the attacker using VirusTotal"
    ]

    // Images used for analyzing the attack vector and payload
    const analyzingAttackVectorImages = [
        "/images/Blog_Images/DanaBot/3_searching_with_sha256sum.png",
        "/images/Blog_Images/DanaBot/4_hidden_javascript_filename.png"
    ]
    const analyzingAttackVectorCaptions = [
        "Searching the malicious payload file using sha256sum hash in VirusTotal",
        "Identifying the hidden JavaScript file disguised as a PHP file"
    ]

    // Images used for further malware analysis
    const furtherMalwareAnalysisImages = [
        "/images/Blog_Images/DanaBot/5_deobfuscating_the_js_file.png",
    ]
    const furtherMalwareAnalysisCaptions = [
        "Deobfuscating the JavaScript file using Obfuscator.io"
    ]


    return (
        <>
            <div className="project-page-container">
                <BlogPageIntro {...introDetails} />

                <h1>What I Set Out to Learn</h1>
                <p>
                    As someone transitioning from classroom assignments and certifications to real-world cybersecurity challenges, I wanted to start with an approachable but practical exercise. I chose this network forensics lab from CyberDefenders to begin developing hands-on skills in:
                    <ul>
                        <li><strong>Analyzing real packet capture (PCAP) files</strong></li>
                        <li><strong>Identifying malicious behavior in traffic</strong></li>
                        <li><strong>Understanding how modern malware communicates over the network</strong></li>
                    </ul>
                </p>


                <h1>Tools, Lab, and Environment</h1>
                <p>
                    I conducted this investigation in a safe, isolated sandbox environment using:
                    <ul>
                        <li><strong>Kali Linux</strong> - Secure analysis environment</li>
                        <li><strong>Wireshark</strong> - For network traffic analysis</li>
                        <li><strong>VirusTotal</strong> - For scanning files, URLs, and hashes against known malware databases</li>
                        <li><strong>ANY.RUN</strong> - A sandbox for dynamic malware analysis</li>
                        <li><strong>Obfuscator.io</strong> - To convert unreadable JavaScript into human-readable code</li>

                    </ul>
                </p>



                <h1>What I Discovered</h1>
                <h2>Identifying the Attacker</h2>
                <p>
                    Since an attacker's first point of contact is often found in DNS records, I began by <strong>filtering DNS traffic in Wireshark</strong>. I noticed an unusual domain that used a dynamic DNS (DDNS) service. These services are often exploited by attackers because they allow IP addresses to change frequently while keeping the same domain name. This <strong>helps attackers remain anonymous and harder to track</strong> for very cheap.
                </p>
                <p>The suspicious domain resolved to a known malicious IP address. I verified this using VirusTotal, which flagged it as associated with malware.</p>
                <ImageCarousel carouselImages={whatIDiscoveredImages} captions={whatIDiscoveredCaptions} />

                <h2>Analyzing the Attack Vector</h2>
                <p>
                    Since malware is often delivered over HTTP/S, I <strong>examined HTTP requests in the PCAP file</strong>. I spotted a suspicious GET request from the infected system to the attacker’s IP. The response was the initial malware payload, a file named [REDACTED].php. Meaning that somehow, <strong>the victim was tricked into requesting to download the malicious PHP payload from the attacker</strong>, compromising their system. The victim was probably manipulated through a phishing email with malicious link or document attachment with a malicious macro cleverly hidden inside of a Word or Excel file.
                </p>
                <p>
                    I also could have also exported HTTP objects from the PCAP file in WireShark. Doing this, I identified the object sent by the malicious IP over HTTP with the suspicious content-type/MIME type of “application/octet-stream” (often used to deliver as raw binary files to avoid basic content filters) to be the malicious payload. This method allowed me to download the file for deeper analysis.
                </p>
                <p>
                    I extracted the file and used the sha256sum command to generate and then search the unique SHA-256 hash of the file on VirusTotal, <strong>confirming this PHP file is a known Trojan installer</strong>. Upon closer inspection in WireShark, the HTTP response header of the GET request revealed that the file is not a PHP file at all, <strong>it was actually an obfuscated JavaScript file</strong>.
                </p>
                <ImageCarousel carouselImages={analyzingAttackVectorImages} captions={analyzingAttackVectorCaptions} />

                <h2>Further Malware Analysis</h2>
                <p>
                    To analyze the actual behavior of the Trojan installer, I <strong>deobfuscated the JavaScript using Obfuscator.io</strong>. Looking at the deobfuscated code revealed that the process used to execute this malicious file was wscript.exe. This wscript.exe process is the Windows Script Host (WSH), a utility built-in to Windows that executes VBScript (.vbs) and JScript (.js, Microsoft’s JavaScript variant) and is <strong>used by attackers to avoid detection from antivirus tools</strong> and users since it <strong>blends into normal operating system behavior</strong>.
                </p>
                <ImageCarousel carouselImages={furtherMalwareAnalysisImages} captions={furtherMalwareAnalysisCaptions} />
                <p>
                    The JavaScript code also showed that <strong>the Trojan installer downloaded another payload file called resources.dll</strong>. A .dll (Dynamic-Link Library) file is typically used by attackers to <strong>blend in with normal OS activity</strong> and avoid drawing attention, since .dll files aren’t executed directly. Instead, they are loaded by other processes, typically trusted ones.
                </p>
                <p>
                    VirusTotal <strong>confirmed that resources.dll was malicious and specifically tied to DanaBot</strong>. From here, the DLL likely enables DanaBot’s modular capabilities by:
                    <ul>
                        <li>Establish persistence across reboots</li>
                        <li>Inject code into trusted running system processes to hide</li>
                        <li>Open network connections to remote attacker-controlled C2 servers</li>
                        <li>Possibly download further malware for keylogging or credential theft</li>
                    </ul>
                </p>

                <h1>What I Learned</h1>
                <p>From working on this lab, I gained a better understanding of both technical and practical aspects of real-world cybersecurity threats.</p>
                <p>
                    <u>Key takeaways include:</u>
                    <ul>
                        <li>The history and behavior of DanaBot, a modular banking trojan</li>
                        <li>How modular malware can adapt and extend functionality post-infection</li>
                        <li>The role of command-and-control (C2) servers in remote attacker control</li>
                        <li>How attackers leverage Dynamic DNS (DDNS) services for anonymity and resilience</li>
                        <li>Real-world consequences of common infection vectors, including phishing emails with malicious attachments or links</li>
                        <li>The importance of analyzing DNS traffic to identify initial attacker contact</li>
                        <li>How malicious payloads are often delivered over HTTP/S disguised as harmless file types</li>
                        <li>The use of .dll (Dynamic-Link Library) files to hide and execute malicious code indirectly</li>
                        <li>Techniques like JavaScript obfuscation and how to reverse them with tools like Obfuscator.io</li>
                        <li>When and how to effectively use analysis tools like Wireshark, VirusTotal, and ANY.RUN</li>
                        <li>How real-world malware operations bypass basic antivirus or firewall filters</li>
                        <li>The importance of practicing network forensics to identify Indicators of Compromise (IOCs)</li>
                    </ul>
                </p>

                <h1>Why It Matters in a Real-World Job</h1>
                <p>Analyzing this DanaBot infection scenario gave me <strong>hands-on experience with the kinds of tasks cybersecurity professionals face in real incidents</strong>. In real-world security roles such as in a SOC, threat intelligence team, or incident response, understanding how to trace malware behavior through packet captures, recognize common attacker tactics, and pivot across tools like VirusTotal or sandbox environments is essential.</p>
                <p>
                    <u>Why this specific exercise matters:</u>
                    <ul>
                        <li>Understanding how malware communicates over the network prepares me to monitor real-world environments for early signs of compromise.</li>
                        <li>Knowing where to look, such as DNS queries or suspicious HTTP responses, is essential for threat hunting, incident response, and SOC analysis.</li>
                        <li>Familiarity with tools like Wireshark, VirusTotal, and sandboxing platforms equips me to quickly analyze threats without needing full reverse engineering skills.</li>
                        <li>Recognizing how phishing leads to initial access helps me think like an attacker and better anticipate how to build defense in depth.</li>
                        <li>Knowing what modular malware is and how .dll files can hide in plain sight helps with identifying stealthy threats during malware analysis or red team engagements.</li>
                    </ul>
                </p>
                <p>Ultimately, this lab simulated the investigative thinking and tooling workflows used in real security operations. It taught me how attackers exploit weak links and how defenders can trace, verify, and understand these actions through forensics.</p>
            </div>
        </>
    )
}

export default DanaBotBlog;