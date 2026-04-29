import PageIntro from "../../components/PageIntro";
import ImageCarousel from "../../components/ImageCarousel";
import "../../stylesheets/ProjectPage.css";

export function WarehouseNetworkRackPage() {

    const introDetails = {
        projectTitle: "Warehouse Network Infrastructure Build",
        readTime: "5 minute read",
        columnTitles: ["Type📁", "Tools Used🛠️", "Skills Applied🧠"],
        columnRowsInfo: [
            ["IT Infrastructure", "Networking"],
            ["• Proxmox VE", "• Docker", "• Frigate", "• Ubuntu Server", "• UniFi", "• rclone", "• Network UPS Tools / SNMP", "• Ubiquiti EdgeRouter", "• Backblaze B2"],
            ["• LAN Network Design & Configuration", "• Proxmox Virtualization", "• VM Templating & Cloning", "• UniFi Mesh Network Setup", "• IP Camera Integration", "• NVR Setup with Frigate", "• Cloud Backup Automation", "• UPS Monitoring with NUT/SNMP"]
        ],
        linkColTitles: ["My Blog Post📝"],
        linkColLinks: ["/blog/warehouse-network-rack"],
        linkTexts: ["Read more →"],
        introText: [
            "A <strong>real-world network infrastructure deployment</strong> built from scratch for a workplace warehouse expansion. This project covers the full stack: <strong>LAN design, Proxmox virtualization, a UniFi wireless mesh network, a Frigate NVR security camera system with cloud backup, and UPS-integrated graceful shutdown via SNMP</strong>. All components are rack-mounted and production-running.",
        ],
    };
    // Rack / overview images
    const overviewImages = [
        "/images/Blog_Images/WarehouseNetworkRack/diagrams/network_diagram_lr.png",
        "/images/Blog_Images/WarehouseNetworkRack/data_rack_thumbnail.jpg",
    ];
    const overviewCaptions = [
        "High-level network diagram of the full deployment",
        "The finished networking rack ",
    ];

    // LAN & networking images
    const networkingImages = [
        "/images/Blog_Images/WarehouseNetworkRack/project_page/1_networking_infrastructure/EdgeRouter_Lite.jpg",
        "/images/Blog_Images/WarehouseNetworkRack/project_page/1_networking_infrastructure/TP-Link_POE_Switch.jpg",
        "/images/Blog_Images/WarehouseNetworkRack/project_page/1_networking_infrastructure/UniFi_AP_AC_Pro.png",
        "/images/Blog_Images/WarehouseNetworkRack/5_mesh_network/1d_mesh_network_example.png",
    ];
    const networkingCaptions = [
        "EdgeRouter Lite serving as the gateway and DHCP server for the LAN",
        "TP-Link POE switch providing wired connectivity and power to devices in the rack and across the warehouse",
        "UniFi AP AC Pro access point providing wireless coverage",
        "Example mesh network created and visible in UniFi topology view",
    ];

    // Proxmox & server images
    const proxmoxImages = [
        "/images/Blog_Images/WarehouseNetworkRack/2_proxmox_setup/1a_proxmox_installer.png",
        "/images/Blog_Images/WarehouseNetworkRack/2_proxmox_setup/1b_proxmox_web_ui_example.png",
        "/images/Blog_Images/WarehouseNetworkRack/3_vm_template/2b_convert_to_template.png",
    ];
    const proxmoxCaptions = [
        "Proxmox VE installer booted on the server's monitor during setup",
        "Example Proxmox VE dashboard showing running VMs",
        "Example of creating the Ubuntu 24.04 golden image template for a new VM",
    ];

    // Frigate & camera images
    const frigateImages = [
        "/images/Blog_Images/WarehouseNetworkRack/project_page/3_frigate/wansview_w6_camera.jpg",
        "/images/Blog_Images/WarehouseNetworkRack/7_docker_frigate/2b_frigate_web_ui.png",
        "/images/Blog_Images/WarehouseNetworkRack/7_docker_frigate/2c_frigate_camera_stream.png",
        "/images/Blog_Images/WarehouseNetworkRack/8_cloud_backup/1c_b2_uploads.png",
    ];
    const frigateCaptions = [
        "Wansview W6 IP cameras used to provide 1080p video streams over RTSP",
        "Frigate NVR web UI example at http://10.1.17.41:5000",
        "Live camera stream with object detection active",
        "Recording segments uploaded to Backblaze B2 via rclone",
    ];

    // UPS images
    const upsImages = [
        "/images/Blog_Images/WarehouseNetworkRack/project_page/4_ups/APC Smart-UPS XL 3000VA.jpg",
        "/images/Blog_Images/WarehouseNetworkRack/project_page/4_ups/AP9617 card.jpg",
    ];
    const upsCaptions = [
        "The rack-mountable UPS used (APC Smart-UPS XL 3000VA Rack-mountable UPS)",
        "The network card for the UPS (AP9617) was configured with a static IP and SNMP enabled",
    ];

    return (
        <>
            <div className="project-page-container">
                <PageIntro {...introDetails} />

                <ImageCarousel carouselImages={overviewImages} captions={overviewCaptions} />

                <h1>Project Purpose and Goal</h1>
                <p>My workplace was expanding into a new warehouse space that had no networking infrastructure whatsoever. I was tasked with designing and deploying everything from scratch, from the physical rack and cabling to the software stack running on top of it.</p>
                <p>The goal was to build a <strong>reliable, secure, and maintainable infrastructure</strong> that could support daily warehouse operations: wired and wireless connectivity, remote manageability, physical security through cameras, and protection against power loss. Rather than just getting things working, I documented every decision and step in a <a href="https://steven-vasquez.com/blog/warehouse-network-rack" target="_blank" rel="noreferrer">detailed build guide</a> so the setup could be reproduced, maintained, or expanded by anyone on the team.</p>

                <h1>What Was Built</h1>
                <p>The deployment has five main layers, each depending on the one before it:</p>
                <ul>
                    <li><strong>LAN Network</strong> — An EdgeRouter Lite configured as the gateway for a <strong>/21 subnet</strong> (10.1.16.0–10.1.23.255), providing 2,000+ addressable IPs for current and future devices. A managed TP-Link PoE switch handles wired distribution with static DHCP mapping for all fixed devices.</li>
                    <li><strong>Virtualization Server</strong> — A Proxmox VE server running on a dedicated machine with a <strong>ZFS mirror</strong> for storage redundancy. A reusable Ubuntu 24.04 VM template was built and configured so new VMs can be cloned and deployed in minutes.</li>
                    <li><strong>Wireless Mesh Network</strong> — UniFi AP AC Pro access points adopted and managed through a <strong>UniFi Network Controller</strong> running as a Proxmox VM, providing full wireless coverage across the warehouse floor.</li>
                    <li><strong>Security Camera System</strong> — Wansview W6 IP cameras feeding into <strong>Frigate NVR</strong>, an open-source containerized NVR running on a dedicated Docker/file server. Footage is stored on a software RAID1 array locally and automatically synced to <strong>Backblaze B2</strong> cloud storage every 15 minutes via rclone (7 days locally, permanent archive offsite).</li>
                    <li><strong>UPS Monitoring</strong> — An APC UPS with a network card integrated into Proxmox via <strong>SNMPv1 and NUT</strong>, continuously monitoring battery status and triggering graceful VM shutdown if power is lost.</li>
                </ul>

                <h1>Networking & Infrastructure</h1>
                <p>Before anything else could be deployed, the LAN had to be designed deliberately. I chose a <strong>/21 subnet</strong> over the typical /24 to give the network room to grow without re-subnetting later. This covers over 2,000 addresses across a single contiguous range. The EdgeRouter was configured via CLI to handle DHCP, NAT, and static IP mapping for every fixed device on the network.</p>
                <p>The UniFi mesh network was deployed on top of this LAN, with each AP assigned a static IP and adopted into a controller VM running on Proxmox. The mesh topology means APs without a direct cable run can wirelessly uplink to a wired AP, which was important given the physical layout of the warehouse space.</p>
                <ImageCarousel carouselImages={networkingImages} captions={networkingCaptions} />

                <h1>Proxmox Virtualization & VM Template Workflow</h1>
                <p>Rather than running services directly on bare metal, I used <strong>Proxmox VE</strong> to virtualize them, making each service isolated, snapshotable, and easy to restore. The server's two 1TB HDDs were configured as a <strong>ZFS mirror</strong>, providing drive-level redundancy with checksumming to detect and correct silent data corruption.</p>
                <p>To avoid repeating OS installs for every new VM, I built a <strong>golden image template</strong> — a fully updated Ubuntu 24.04 VM with the QEMU guest agent installed and all unique identity information stripped (machine ID, SSH host keys, DHCP leases). New VMs are cloned from this template and ready to configure in minutes. The UniFi controller was the first VM deployed from it.</p>
                <ImageCarousel carouselImages={proxmoxImages} captions={proxmoxCaptions} />

                <h1>Security Camera System & Cloud Backup</h1>
                <p>The camera system runs on a separate dedicated server (<span style={{fontFamily: "'Segoe UI Mono', Consolas, monospace", backgroundColor: "#eaeaea", padding: "0px 4px", borderRadius: "4px"}}>server011</span>) with its own software RAID1 array across two 4TB HDDs. <strong>Frigate NVR</strong> runs as a Docker container using <strong>VAAPI hardware acceleration</strong> to offload video decoding to the Intel GPU, keeping CPU usage low while recording multiple 1080p streams simultaneously. Object detection (person, vehicle) runs on CPU.</p>
                <p>For redundancy, a <strong>rclone backup script</strong> runs every 15 minutes via cron, syncing new recording segments to a <strong>Backblaze B2</strong> bucket. Local footage rolls over after 7 days; the cloud keeps a permanent archive. The script uses <span style={{fontFamily: "'Segoe UI Mono', Consolas, monospace", backgroundColor: "#eaeaea", padding: "0px 4px", borderRadius: "4px"}}>--ignore-existing</span> and B2's fast-list API so it stays efficient even as the archive grows.</p>
                <ImageCarousel carouselImages={frigateImages} captions={frigateCaptions} />

                <h1>UPS Monitoring & Graceful Shutdown</h1>
                <p>One of the more interesting problems in this build was getting the APC UPS onto the network. The AP9617 network card had no display and an unknown IP. So, I used <strong>Wireshark</strong> to capture the DHCP discovery broadcast the card sends on reset, identify its MAC address and current IP from the packet data, and gain access to its web UI. From there I configured a static IP and enabled <strong>SNMPv1</strong> access.</p>
                <p>On the Proxmox side, <strong>NUT (Network UPS Tools)</strong> was installed and configured to poll the UPS over SNMP every 15 seconds. When the UPS reports a low battery condition, NUT automatically triggers a graceful shutdown sequence. This means that VMs power down in a defined order before the host itself shuts off. This was tested safely using <span style={{fontFamily: "'Segoe UI Mono', Consolas, monospace", backgroundColor: "#eaeaea", padding: "0px 4px", borderRadius: "4px"}}>upsmon -c fsd</span> to simulate the low battery signal without cutting power.</p>
                <ImageCarousel carouselImages={upsImages} captions={upsCaptions} />

                <h1>Full Build Guide</h1>
                <p>Every step of this project, including configuration details, commands, troubleshooting notes, and the reasoning behind each decision, is documented in the full build guide on my blog. If you're attempting something similar or want to understand any part of this deployment in depth, that's the place to go.</p>
                <p><a href="/blog/warehouse-network-rack" target="_blank" rel="noopener noreferrer">Read my full Warehouse Network Rack Build Guide →</a></p>

            </div>
        </>
    );
}

export default WarehouseNetworkRackPage;