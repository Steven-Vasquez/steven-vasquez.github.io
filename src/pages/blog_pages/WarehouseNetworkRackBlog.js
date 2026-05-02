import PageIntro from "../../components/PageIntro";
import ImageCarousel from "../../components/ImageCarousel";
//import { Link as ScrollLink } from 'react-scroll';

import "../../stylesheets/ProjectPage.css";
import "../../stylesheets/Blog.css";

export function WarehouseNetworkRackBlog() {

    const introDetails = {
        projectTitle: "Warehouse Network Rack Build & Setup Guide",
        readTime: "23 minute read",
        columnTitles: ["Type📁", "Tools Used🛠️", "Hardware Used💻", "Skills Applied🧠"],
        columnRowsInfo: [
            ["IT Guide", "Networking", "IT Infrastructure"],
            ["• Proxmox VE 8.4", "• Docker", "• Frigate", "• Ubuntu Server 24.04", "• UniFi", "• rclone", "• Network UPS Tools / SNMP",  "• Ubiquiti EdgeRouter", "• Backblaze B2"],
            ["• EdgeRouter Lite", "• TP-Link PoE Switch", "• UniFi Access Points", "• Wansview W6 Cameras", "• APC UPS"],
            ["• LAN Network Design & Configuration", "• Proxmox Virtualization", "• VM Templating & Cloning", "• UniFi Mesh Network Setup", "• IP Camera Integration", "• NVR Setup with Frigate", "• Cloud Backup Automation", "• UPS Monitoring with NUT/SNMP"]
        ],
        linkColTitles: [],
        linkColLinks: [[]],
        linkTexts: [[]],
        introText: [
            "In this guide, I walk through the <strong>full setup of a networking rack I built for a warehouse expansion project at work</strong>. The rack houses a <strong>Proxmox virtualization server</strong>, a <strong>dedicated Docker/file server</strong>, an <strong>APC UPS</strong>, and a <strong>PoE switch</strong>. All are connected to a newly configured LAN, a UniFi wireless mesh network, a Frigate-based security camera system, and a cloud backup pipeline.",
            "This guide covers everything from physical LAN setup to cloud-backed video surveillance, and I try to explain the reasoning behind each decision along the way to make this useful both as a personal reference and as a resource for anyone attempting something similar."
        ],
    };

    // ─── Image Arrays ──────────────────────────────────────────────────────────
    // NOTE: Replace placeholder paths with your actual screenshot paths.

    // 1. LAN Network Setup
    const lanSwitchConfigImages = [
        "/images/Blog_Images/WarehouseNetworkRack/1_lan_setup/1a_switch_default_page.png",
        "/images/Blog_Images/WarehouseNetworkRack/1_lan_setup/1b_switch_ip_config.png",
    ];
    const lanSwitchConfigCaptions = [
        "TP-Link switch default web UI after login",
        "Setting the switch's new IP to fit the 10.1.16.x subnet",
    ];

    /*
    const lanRouterSetupImages = [
        "/images/Blog_Images/WarehouseNetworkRack/1_lan_setup/2a_edgerouter_wizard.png",
        "/images/Blog_Images/WarehouseNetworkRack/1_lan_setup/2b_edgerouter_nat_enabled.png",
        "/images/Blog_Images/WarehouseNetworkRack/1_lan_setup/2c_edgerouter_dhcp_server.png",
    ];
    const lanRouterSetupCaptions = [
        "EdgeRouter setup wizard — configuring LAN port (eth1)",
        "NAT enabled confirmation on the dashboard",
        "DHCP server showing only one subnet: 10.1.16.0/21",
    ];
    */

    // 2. Proxmox Setup
    const proxmoxInstallImages = [
        "/images/Blog_Images/WarehouseNetworkRack/2_proxmox_setup/1a_proxmox_installer.png",
        "/images/Blog_Images/WarehouseNetworkRack/2_proxmox_setup/1b_proxmox_web_ui_example.png",
    ];
    const proxmoxInstallCaptions = [
        "Proxmox graphical installer",
        "Proxmox web UI example at https://10.1.17.40:8006",
    ];

    const proxmoxRepoImages = [
        "/images/Blog_Images/WarehouseNetworkRack/2_proxmox_setup/2a_disable_enterprise_repo.png",
        "/images/Blog_Images/WarehouseNetworkRack/2_proxmox_setup/2b_no_subscription_warning.png",
        "/images/Blog_Images/WarehouseNetworkRack/2_proxmox_setup/2c_updates_refresh.png",
    ];
    const proxmoxRepoCaptions = [
        "Disabling enterprise repositories in Proxmox UI",
        "The 'No Valid Subscription' warning — we'll suppress this",
        "Updates tab after switching to community repo",
    ];

    const proxmoxZfsImages = [
        "/images/Blog_Images/WarehouseNetworkRack/2_proxmox_setup/3a_wipe_disk.png",
        "/images/Blog_Images/WarehouseNetworkRack/2_proxmox_setup/3b_create_zfs_mirror.png",
    ];
    const proxmoxZfsCaptions = [
        "Wiping the storage drive before ZFS setup",
        "Creating the ZFS mirror pool named 'data'",
    ];

    // 3. VM Template
    const vmTemplateGeneralImages = [
        "/images/Blog_Images/WarehouseNetworkRack/3_vm_template/1a_create_vm_general.png",
        "/images/Blog_Images/WarehouseNetworkRack/3_vm_template/1b_create_vm_os.png",
        "/images/Blog_Images/WarehouseNetworkRack/3_vm_template/1c_create_vm_system.png",
        "/images/Blog_Images/WarehouseNetworkRack/3_vm_template/1d_create_vm_disks.png",
        "/images/Blog_Images/WarehouseNetworkRack/3_vm_template/1e_create_vm_cpu.png",
        "/images/Blog_Images/WarehouseNetworkRack/3_vm_template/1f_create_vm_memory.png",
        "/images/Blog_Images/WarehouseNetworkRack/3_vm_template/1g_create_vm_network.png",
        "/images/Blog_Images/WarehouseNetworkRack/3_vm_template/1h_create_vm_confirm.png",
    ];
    const vmTemplateGeneralCaptions = [
        "General tab — VM ID and name",
        "OS tab — selecting the Ubuntu 24.04 ISO",
        "System tab — UEFI BIOS, QEMU agent, EFI disk",
        "Disks tab — SCSI, 100GiB, Write back cache",
        "CPU tab — host type, 2 cores",
        "Memory tab — 4096 MB",
        "Network tab — vmbr0 bridge, VirtIO model",
        "Confirm tab — review all settings before finishing",
    ];

    const vmTemplateConvertImages = [
        "/images/Blog_Images/WarehouseNetworkRack/3_vm_template/2a_ubuntu_install.png",
        "/images/Blog_Images/WarehouseNetworkRack/3_vm_template/2b_convert_to_template.png",
        "/images/Blog_Images/WarehouseNetworkRack/3_vm_template/2c_clone_vm.png",
    ];
    const vmTemplateConvertCaptions = [
        "Ubuntu Server 24.04 installation in Proxmox console",
        "Right-clicking the VM to 'Convert to Template'",
        "Cloning the template — select 'Full Clone'",
    ];

    // 4. UniFi Controller VM
    const unifiInstallImages = [
        "/images/Blog_Images/WarehouseNetworkRack/4_unifi_controller/1a_unifi_install_java.png",
        "/images/Blog_Images/WarehouseNetworkRack/4_unifi_controller/1b_unifi_install_mongodb.png",
        "/images/Blog_Images/WarehouseNetworkRack/4_unifi_controller/1c_unifi_web_ui.png",
    ];
    const unifiInstallCaptions = [
        "Installing Java 17 — verified with java -version",
        "Adding the MongoDB 6.0 APT repository",
        "UniFi Network Controller web UI at https://10.1.17.43:8443",
    ];

    // 5. Mesh Network
    const meshNetworkImages = [
        "/images/Blog_Images/WarehouseNetworkRack/5_mesh_network/1a_adopt_device.png",
        "/images/Blog_Images/WarehouseNetworkRack/5_mesh_network/1b_static_ip_map.png",
        "/images/Blog_Images/WarehouseNetworkRack/5_mesh_network/1c_create_wifi_network.png",
        "/images/Blog_Images/WarehouseNetworkRack/5_mesh_network/1d_mesh_network_example.png",
    ];
    const meshNetworkCaptions = [
        "Adopting a device in the controller's Devices tab",
        "Mapping a static IP to the AP via EdgeRouter DHCP leases",
        "Creating the new WiFi network in UniFi Settings → WiFi",
        "Example mesh network created and visible in UniFi topology view",
    ];

    // 6. Security Cameras
    const cameraSetupImages = [
        "/images/Blog_Images/WarehouseNetworkRack/6_cameras/1a_wansview_add_camera.png",
        "/images/Blog_Images/WarehouseNetworkRack/6_cameras/1b_camera_local_account.png",
        "/images/Blog_Images/WarehouseNetworkRack/5_mesh_network/1b_static_ip_map.png",
        "/images/Blog_Images/WarehouseNetworkRack/6_cameras/1d_vlc_rtsp_stream.png",
    ];
    const cameraSetupCaptions = [
        "Adding a W6 camera in the Wansview Cloud app",
        "Setting the camera's local account credentials",
        "Mapping a static IP to the camera in EdgeRouter",
        "Verifying the RTSP stream in VLC",
    ];

    // 7. Docker & Frigate
    const dockerRaidImages = [
        "/images/Blog_Images/WarehouseNetworkRack/7_docker_frigate/1a_lsblk_drives_example.png",
        "/images/Blog_Images/WarehouseNetworkRack/7_docker_frigate/1b_mdadm_create_raid_example.png",
        "/images/Blog_Images/WarehouseNetworkRack/7_docker_frigate/1c_mdstat_progress_example.png",
        "/images/Blog_Images/WarehouseNetworkRack/7_docker_frigate/1d_verify_raid_array_example.png",
    ];
    const dockerRaidCaptions = [
        "lsblk example output showing drives before RAID creation",
        "mdadm command creating the RAID array on example drives",
        "cat /proc/mdstat showing RAID build progress",
        "lsblk (or df -h) confirming /mnt/storage is mounted (after reboot)",
    ];

    const frigateSetupImages = [
        //"/images/Blog_Images/WarehouseNetworkRack/7_docker_frigate/2a_frigate_compose.png",
        "/images/Blog_Images/WarehouseNetworkRack/7_docker_frigate/2b_frigate_web_ui.png",
        "/images/Blog_Images/WarehouseNetworkRack/7_docker_frigate/2c_frigate_camera_stream.png",
    ];
    const frigateSetupCaptions = [
        //"docker-compose.yml with VAAPI and RAID volume mounts",
        "Frigate web UI example at http://10.1.17.41:5000",
        "Live camera stream example visible in Frigate with object detection active",
    ];

    // 8. Cloud Backup
    const cloudBackupImages = [
        "/images/Blog_Images/WarehouseNetworkRack/8_cloud_backup/1a_b2_bucket_settings.png",
        //"/images/Blog_Images/WarehouseNetworkRack/8_cloud_backup/1b_rclone_config.png",
        "/images/Blog_Images/WarehouseNetworkRack/8_cloud_backup/1c_b2_uploads.png",
        //"/images/Blog_Images/WarehouseNetworkRack/8_cloud_backup/1d_cron_job.png",
    ];
    const cloudBackupCaptions = [
        "Backblaze B2 bucket settings — Keep only latest version enabled",
        //"rclone config showing the b2 remote configured",
        "Folders appearing in B2 web UI after first successful upload",
        //"crontab entry running the backup script every 15 minutes",
    ];

    /*
    // 9. UPS Setup
    const upsWiresharkImages = [
        "/images/Blog_Images/WarehouseNetworkRack/9_ups_setup/1a_wireshark_filter.png",
        "/images/Blog_Images/WarehouseNetworkRack/9_ups_setup/1b_dhcp_discovery_packet.png",
        "/images/Blog_Images/WarehouseNetworkRack/9_ups_setup/1c_arp_a_output.png",
    ];
    const upsWiresharkCaptions = [
        "Wireshark display filter: eth.addr contains 00:c0:b7",
        "DHCP discovery packet from the AP9617 card — source MAC and IP visible",
        "arp -a confirming the UPS MAC is present in the ARP table",
    ];
    */

    /*
    const upsConfigImages = [
        "/images/Blog_Images/WarehouseNetworkRack/9_ups_setup/2a_ups_web_ui.png",
        "/images/Blog_Images/WarehouseNetworkRack/9_ups_setup/2b_snmpv1_enable.png",
        "/images/Blog_Images/WarehouseNetworkRack/9_ups_setup/2c_snmp_community_config.png",
        "/images/Blog_Images/WarehouseNetworkRack/9_ups_setup/2d_upsc_output.png",
    ];
    const upsConfigCaptions = [
        "APC UPS web UI — Administration → Network settings",
        "Enabling SNMPv1 access on the AP9617 card",
        "Configuring the SNMPv1 community with the Proxmox host IP",
        "upsc apc_ups@localhost output showing UPS status: OL (online)",
    ];
    */

    // ─── JSX ───────────────────────────────────────────────────────────────────
    return (
        <>
            <div className="project-page-container">
                <PageIntro {...introDetails} />

                <div className="image-container">
                    <img src="/images/Blog_Images/WarehouseNetworkRack/diagrams/network_diagram_lr.png" alt="High-level network diagram of the full deployment" className="project-images-large"></img>
                </div>
                {/* ── I. Introduction ─────────────────────────────────────────── */}
                <h1 className="section-header">I. <span className="section-title">Introduction & Background</span></h1>

                <h2 className="section-header"><span className="section-title">Why I Built This</span></h2>
                <p>My workplace was undergoing a warehouse expansion and needed a proper networking infrastructure built from scratch in the new space. The goals were:
                    <ul>
                        <li className="indented">Set up a <strong>reliable LAN</strong> with a managed switch and router</li>
                        <li className="indented">Run a <strong>Proxmox virtualization server</strong> to host services as VMs</li>
                        <li className="indented">Deploy a <strong>wireless mesh network</strong> via Ubiquiti UniFi access points</li>
                        <li className="indented">Set up <strong>IP security cameras</strong> with local NVR recording and cloud backup</li>
                        <li className="indented">Protect the server hardware with a <strong>UPS that can trigger a graceful shutdown</strong> automatically</li>
                    </ul>
                    Rather than just documenting the end result, I kept detailed notes at each step so I could reproduce the setup, troubleshoot issues, and share the process. This guide is the cleaned-up version of those notes.
                </p>

                <h2 className="section-header"><span className="section-title">Hardware and Software Overview</span></h2>
                <p><strong>Rack Hardware:</strong>
                    <ul>
                        <li><strong>EdgeRouter Lite</strong> — router/gateway</li>
                        <li><strong>TP-Link T1500-28PCT</strong> — PoE managed switch</li>
                        <li><strong>Proxmox Server</strong> — Z97-A Motherboard, 4790K CPU, 32GB RAM, 2x 256GB SSD (boot), 2x 1TB HDD (data)</li>
                        <li><strong>Docker/File Server (server011)</strong> — Z97-A Motherboard, 4790K CPU, 32GB RAM, 2x 256GB SSD (boot RAID1), 2x 4TB HDD (storage RAID1)</li>
                        <li><strong>APC UPS</strong> (model SUA2200RMXL3U) with AP9617 network card</li>
                    </ul>
                </p>
                <p><strong>Network Hardware:</strong>
                    <ul>
                        <li><strong>UniFi AP AC Pro</strong> — access points for mesh WiFi</li>
                        <li><strong>Wansview W6 1080P Outdoor IP Cameras</strong></li>
                    </ul>
                </p>
                <p><strong>Software:</strong>
                    <ul>
                        <li>Proxmox VE 8.4</li>
                        <li>Ubuntu Server 24.04 LTS</li>
                        <li>UniFi Network Controller</li>
                        <li>Docker + Frigate NVR</li>
                        <li>rclone + Backblaze B2</li>
                        <li>NUT (Network UPS Tools)</li>
                    </ul>
                </p>

                {/* ── II. Step-by-Step Guide ───────────────────────────────────── */}
                <h1 className="section-header">II. <span className="section-title">Step-by-Step Setup Guide</span></h1>

                {/* ── 1. LAN Network Setup ─────────────────────────────────────── */}
                <h2 className="section-header">1 <span className="section-title">LAN Network Setup</span></h2>
                <p><strong>Goal:</strong> Create a LAN using a router and managed PoE switch with a subnet covering <span className="inline-code">10.1.16.0 – 10.1.23.255</span> using a <span className="inline-code">/21</span> subnet mask (<span className="inline-code">255.255.248.0</span>) and a default gateway of <span className="inline-code">10.1.16.1</span>.</p>

                <h3 className="section-header">1.1 <span className="section-title">Prepare the Switch</span></h3>
                <p>Before connecting the switch to anything else, we need to reconfigure it away from its factory default IP (<span className="inline-code">192.168.0.1</span>) so it fits our planned subnet.
                    <ol>
                        <li>Directly connect your laptop to the switch with <strong>no other ethernet connections</strong> plugged in.</li>
                        <li>Factory reset the TP-Link switch.</li>
                        <li>Set your laptop's network adapter to a static IP on the switch's default subnet:
                            <ul>
                                <li className="indented"><strong>IP:</strong> <span className="inline-code">192.168.0.x</span> (any available)</li>
                                <li className="indented"><strong>Default Gateway:</strong> (leave blank)</li>
                                <li className="indented"><strong>Preferred DNS:</strong> <span className="inline-code">8.8.8.8</span></li>
                            </ul>
                        </li>
                        <li>Access the TP-Link web UI at <span className="inline-code">https://192.168.0.1</span> with default credentials (<span className="inline-code">admin</span> / <span className="inline-code">admin</span>).</li>
                        <li>Navigate to <span className="inline-code">System</span> → <span className="inline-code">System Info</span> → <span className="inline-code">System IP</span> and set:
                            <ul>
                                <li className="indented"><strong>IP Address:</strong> <span className="inline-code">10.1.16.50</span></li>
                                <li className="indented"><strong>Subnet Mask:</strong> <span className="inline-code">255.255.248.0</span></li>
                                <li className="indented"><strong>Default Gateway:</strong> <span className="inline-code">10.1.16.1</span></li>
                            </ul>
                        </li>
                        <li>Navigate to <span className="inline-code">System</span> → <span className="inline-code">System Tools</span> → <span className="inline-code">Configuration</span> and save so the config persists across reboots.</li>
                    </ol>
                </p>
                <ImageCarousel carouselImages={lanSwitchConfigImages} captions={lanSwitchConfigCaptions} />

                <h3 className="section-header">1.2 <span className="section-title">Set Up the EdgeRouter as the Gateway</span></h3>

                <h4 className="section-header">1.2.1 <span className="section-title">Reset and Initial Configuration</span></h4>
                <p>
                    <ol>
                        <li>Set your laptop to a static IP on the router's default subnet:
                            <ul>
                                <li className="indented"><strong>IP:</strong> <span className="inline-code">192.168.1.100</span></li>
                                <li className="indented"><strong>Subnet Mask:</strong> <span className="inline-code">255.255.255.0</span></li>
                                <li className="indented"><strong>Gateway:</strong> <span className="inline-code">192.168.1.1</span></li>
                                <li className="indented"><strong>Preferred DNS:</strong> <span className="inline-code">8.8.8.8</span></li>
                            </ul>
                        </li>
                        <li>Factory reset the EdgeRouter Lite.</li>
                        <li>Plug your laptop's ethernet directly into the router's <span className="inline-code">eth0</span> port.</li>
                        <li>Access the router's web UI at <span className="inline-code">https://192.168.1.1</span> (default credentials: <span className="inline-code">ubnt</span> / <span className="inline-code">ubnt</span>).</li>
                        <li>Run the basic setup wizard and configure the LAN port:
                            <ul>
                                <li className="indented"><strong>Interface:</strong> <span className="inline-code">eth1</span></li>
                                <li className="indented"><strong>IP Address:</strong> <span className="inline-code">10.1.16.1</span></li>
                                <li className="indented"><strong>Subnet:</strong> <span className="inline-code">255.255.248.0</span></li>
                                <li className="indented"><strong>DHCP Server:</strong> Enabled</li>
                            </ul>
                        </li>
                        <li>Apply and wait ~60 seconds, then replug correctly:
                            <ul>
                                <li className="indented">WAN ethernet (from the wall) → router <span className="inline-code">eth0</span></li>
                                <li className="indented">Router <span className="inline-code">eth1</span> → switch</li>
                                <li className="indented">Laptop → switch</li>
                            </ul>
                        </li>
                    </ol>
                    <div className="image-container">
                        <img src="/images/Blog_Images/WarehouseNetworkRack/1_lan_setup/2a_edgerouter_wizard.png" alt="Blog Image" className="project-images"></img>
                    </div>
                </p>

                <h4 className="section-header">1.2.2 <span className="section-title">Expand the Subnet to /21</span></h4>
                <p>The default wizard sets the router to a <span className="inline-code">/24</span> subnet. We need to expand this to <span className="inline-code">/21</span> so our IP range covers <span className="inline-code">10.1.16.0 – 10.1.23.255</span>, which gives plenty of room for all devices across the warehouse expansion.
                    <ol>
                        <li>Log back into the EdgeRouter UI and open the CLI (top-right corner).</li>
                        <li>Run the following commands:
                            <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`configure

# Set the LAN interface to the /21 subnet
set interfaces ethernet eth1 address 10.1.16.1/21

# Remove old DHCP scope and configure the new one
delete service dhcp-server shared-network-name LAN
set service dhcp-server shared-network-name LAN subnet 10.1.16.0/21 default-router 10.1.16.1
set service dhcp-server shared-network-name LAN subnet 10.1.16.0/21 dns-server 8.8.8.8
set service dhcp-server shared-network-name LAN subnet 10.1.16.0/21 lease 86400
set service dhcp-server shared-network-name LAN subnet 10.1.16.0/21 start 10.1.16.100 stop 10.1.16.200

commit
save
exit`}
                            </pre>
                        </li>
                        <li>Set your laptop back to DHCP and verify it gets an IP in the <span className="inline-code">10.1.16.x</span> range.</li>
                        <li>Verify internet connectivity (<span className="inline-code">ping 8.8.8.8</span>).</li>
                        <li>Log back into the router at <span className="inline-code">https://10.1.16.1</span> and confirm <strong>NAT is enabled</strong> on the dashboard. This is important because without NAT, LAN devices can't reach the internet.</li>
                        <li>Go to <span className="inline-code">Services</span> → <span className="inline-code">DHCP Server</span> and confirm only one subnet (<span className="inline-code">10.1.16.0/21</span>) exists. Remove any leftover entries.</li>
                    </ol>
                </p>

                <h4 style={{ marginBottom: ".5em" }}><span className="note">Why /21 instead of /24?</span></h4>
                <p>A <span className="inline-code">/24</span> subnet gives you 254 usable addresses. By using <span className="inline-code">/21</span>, we get <strong>2,046 usable addresses</strong> across <span className="inline-code">10.1.16.0 – 10.1.23.255</span>. This gives plenty of room for servers, access points, cameras, and any future devices without needing to re-subnet the whole network later.</p>

                {/* ── 2. Proxmox Server Setup ──────────────────────────────────── */}
                <h2 className="section-header">2 <span className="section-title">Proxmox Server Setup</span></h2>
                <p><strong>Goal:</strong> Install and configure a Proxmox VE server that will host virtual machines for services like the UniFi controller.</p>
                <p><strong>Hardware:</strong> Z97-A Motherboard, 4790K CPU, 32GB RAM, 2x 256GB SSD (boot drives), 2x 1TB HDD (data/storage drives)</p>

                <h3 className="section-header">2.1 <span className="section-title">Install Proxmox</span></h3>
                <p>
                    <ol>
                        <li>Download the <strong>Proxmox VE 8.4 ISO</strong> from the official website.</li>
                        <li>Use Rufus to flash it to a USB drive.</li>
                        <li>Boot from the USB on the server machine and run the <strong>graphical installer</strong>.</li>
                    </ol>
                </p>
                <ImageCarousel carouselImages={proxmoxInstallImages} captions={proxmoxInstallCaptions} />

                <h3 className="section-header">2.2 <span className="section-title">Connect to the Proxmox Web UI</span></h3>
                <p>If the <span className="inline-code">10.1.16.0/21</span> network isn't fully set up yet when you first install Proxmox, you may need to temporarily add a secondary IP to reach the web UI from your laptop:
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`# Add a secondary IP in your PC's subnet
ip addr add 10.1.6.40/21 dev vmbr0

# Add a route for communication
ip route add 10.1.0.0/21 dev vmbr0

# Restart the web UI services
systemctl restart pveproxy pvedaemon`}
                    </pre>
                    Once the network is properly set up, assign Proxmox the static IP <span className="inline-code">10.1.17.40</span> via the router's DHCP static mapping (<span className="inline-code">Services → DHCP → LAN → Configure Static Map</span>). The web UI is then accessible at <span className="inline-code">https://10.1.17.40:8006</span>.
                </p>

                <h3 className="section-header">2.3 <span className="section-title">Disable the "No Valid Subscription" Warning</span></h3>
                <p>Proxmox shows a subscription nag on every login because we're using the free community version. Since this is a work/lab environment and not a production enterprise setup, we can safely suppress it.
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`cd /usr/share/javascript/proxmox-widget-toolkit

# Backup first
cp proxmoxlib.js proxmoxlib.js.bak

# Open the file and search for "no valid subscription" (CTRL+W)
# Comment out the entire error message block
nano proxmoxlib.js`}
                    </pre>
                    Then restart the proxy service:
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`systemctl restart pveproxy.service`}
                    </pre>
                </p>

                <h3 className="section-header">2.4 <span className="section-title">Configure Update Repositories</span></h3>
                <p>By default, Proxmox points to enterprise repositories that require a paid subscription. We need to switch to the no-subscription (community) repos.
                    <ol>
                        <li>In the Proxmox web UI, disable both <span className="inline-code">enterprise.proxmox.com</span> repository entries.</li>
                        <li>Update your DNS resolver config so Proxmox can reach the internet:
                            <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`nano /etc/resolv.conf
# Add:
# nameserver <corporate dns ip>
# nameserver <your gateway ip>
# nameserver 8.8.8.8`}
                            </pre>
                        </li>
                        <li>Disable the enterprise repo and add the community one:
                            <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`# Backup and disable enterprise repo
cp /etc/apt/sources.list.d/pve-enterprise.list /etc/apt/sources.list.d/pve-enterprise.list.bak
mv /etc/apt/sources.list.d/pve-enterprise.list /etc/apt/sources.list.d/pve-enterprise.list.disabled

# Add Ceph no-subscription community repo
nano /etc/apt/sources.list.d/ceph.list
# Add: deb http://download.proxmox.com/debian/ceph-reef bookworm no-subscription`}
                            </pre>
                        </li>
                        <li>Run <span className="inline-code">apt update</span> and verify updates are available in the Proxmox UI under <span className="inline-code">Updates → Refresh</span>.</li>
                    </ol>
                </p>
                <ImageCarousel carouselImages={proxmoxRepoImages} captions={proxmoxRepoCaptions} />

                <h3 className="section-header">2.5 <span className="section-title">Add Storage Drives (ZFS Mirror)</span></h3>
                <p>The server has two 1TB HDDs for VM data storage. We'll set these up as a <strong>ZFS mirror</strong> (RAID1 equivalent) for redundancy.
                    <ol>
                        <li>In the Proxmox UI: <span className="inline-code">Datacenter → Disks</span> → find the storage drive → <span className="inline-code">Wipe Disk</span></li>
                        <li>Go to <span className="inline-code">Disks → ZFS → Create: ZFS</span> with these settings:
                            <ul>
                                <li className="indented"><strong>Disks:</strong> both storage HDDs</li>
                                <li className="indented"><strong>Name:</strong> <span className="inline-code">data</span></li>
                                <li className="indented"><strong>RAID Level:</strong> Mirror</li>
                                <li className="indented"><strong>Compression:</strong> <span className="inline-code">lz4</span></li>
                                <li className="indented"><strong>ashift:</strong> <span className="inline-code">12</span></li>
                            </ul>
                        </li>
                    </ol>
                </p>
                <ImageCarousel carouselImages={proxmoxZfsImages} captions={proxmoxZfsCaptions} />

                <h4 style={{ marginBottom: ".5em" }}><span className="note">Why ZFS Mirror?</span></h4>
                <p>A mirror means both drives hold identical data. If one drive fails, the other keeps everything running. ZFS also includes <strong>checksumming</strong>, so it detects and corrects silent data corruption <span className="inline-note"> (something traditional RAID doesn't do)</span>. The <span className="inline-code">lz4</span> compression has minimal CPU impact while often reducing disk writes. <span className="inline-code">ashift=12</span> aligns ZFS to 4KB sectors, matching the physical sector size of modern drives <span className="inline-note">(using the default <span className="inline-code">ashift=9</span> would cause misaligned writes and a measurable performance penalty)</span>.</p>

                {/* ── 3. VM Template ───────────────────────────────────────────── */}
                <h2 className="section-header">3 <span className="section-title">Creating a Reusable VM Template (Golden Image)</span></h2>
                <p><strong>Goal:</strong> Create a Lubuntu 24.04 base VM that can be cloned whenever a new VM is needed, avoiding repeated OS installs.</p>
                <p><strong>Prerequisites:</strong>
                    <ul>
                        <li>Proxmox server running with LAN access</li>
                        <li><span className="inline-code">ubuntu-24.04-live-server-amd64.iso</span> uploaded to Proxmox local storage (<span className="inline-code">UI → Datacenter → Node → local → ISO Images → Upload</span>)</li>
                    </ul>
                </p>

                <h3 className="section-header">3.1 <span className="section-title">Create the Base VM</span></h3>
                <p>In the Proxmox web UI, click <span className="inline-code">Create VM</span> and use these settings:</p>
                <ul>
                    <li><strong>General:</strong> VM ID <span className="inline-code">100</span>, Name <span className="inline-code">lubuntu24-base</span></li>
                    <li><strong>OS:</strong> Storage <span className="inline-code">local</span>, ISO <span className="inline-code">ubuntu-24.04-live-server-amd64.iso</span>, Guest OS Linux 6.x+</li>
                    <li><strong>System:</strong> Machine <span className="inline-code">i440fx</span>, BIOS <span className="inline-code">OVMF (UEFI)</span>, QEMU Agent ✅, Add EFI Disk ✅, EFI Storage <span className="inline-code">data</span></li>
                    <li><strong>Disks:</strong> Bus SCSI, Controller VirtIO SCSI single, Storage <span className="inline-code">data</span>, Size <span className="inline-code">100GiB</span>, Cache Write back</li>
                    <li><strong>CPU:</strong> Type <span className="inline-code">host</span>, Cores <span className="inline-code">2</span></li>
                    <li><strong>Memory:</strong> <span className="inline-code">4096 MB</span></li>
                    <li><strong>Network:</strong> Bridge <span className="inline-code">vmbr0</span>, Model VirtIO (paravirtualized)</li>
                </ul>
                <ImageCarousel carouselImages={vmTemplateGeneralImages} captions={vmTemplateGeneralCaptions} />

                <h4 style={{ marginBottom: ".5em" }}><span className="note">Why these settings?</span></h4>
                <p>The <span className="inline-code">host</span> CPU type passes through the actual host CPU model, giving better performance and access to features like hardware AES. VirtIO for both network and disk is the <strong>paravirtualized driver stack</strong>: significantly faster than emulated hardware because the VM knows it's virtualized and communicates directly with the hypervisor rather than emulating physical hardware protocols.</p>

                <h3 className="section-header">3.2 <span className="section-title">Install Ubuntu 24.04</span></h3>
                <p>Start the VM (<span className="inline-code">VM → Console → Start Now</span>) and run the Ubuntu Server installer with these settings:
                    <ul>
                        <li>Language: English</li>
                        <li>Installation Mode: Normal</li>
                        <li>Erase Disk (Swap to File: Ext4)</li>
                        <li>Name/Username: <span className="inline-code">administrator</span></li>
                        <li>Computer Name: <span className="inline-code">lubuntu24-base</span></li>
                        <li>When prompted, install the SSH server</li>
                        <li>Partition with ext4</li>
                    </ul>
                </p>

                <h3 className="section-header">3.3 <span className="section-title">Post-Install Tuning (Inside the VM)</span></h3>
                <p>Before converting to a template, we need to prepare the VM so that clones start clean without inheriting identity information from the base. If clones share a machine ID, they'll have DHCP conflicts and other network issues.
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`# Update the system
sudo apt update && sudo apt upgrade -y

# Install QEMU guest agent (lets Proxmox see the VM's IP, issue graceful shutdowns, etc.)
sudo apt install -y qemu-guest-agent
sudo systemctl enable --now qemu-guest-agent

# Reset machine-id so clones don't share an identity (causes DHCP/network conflicts)
sudo truncate -s 0 /etc/machine-id
sudo rm -f /var/lib/dbus/machine-id

# Remove SSH host keys — each clone regenerates its own on first boot
sudo rm -f /etc/ssh/ssh_host_*_key /etc/ssh/ssh_host_*_key.pub

# Clear DHCP lease state so clones negotiate fresh IPs
sudo rm -f /var/lib/systemd/network/*.lease

# Shut down cleanly
sudo poweroff`}
                    </pre>
                </p>

                <h3 className="section-header">3.4 <span className="section-title">Convert to Template & Clone</span></h3>
                <p>In the Proxmox UI, <strong>right-click the powered-off VM → Convert to Template</strong>.
                    <br></br><br></br>
                    To create a new VM from the template, right-click it → <span className="inline-code">Clone</span>:
                    <ul>
                        <li><strong>Full clone</strong> — independent disk copy, safest option</li>
                        <li><strong>Linked clone</strong> — fast and space-efficient, requires thin provisioning storage and depends on the base template being intact</li>
                    </ul>
                    After the clone starts, verify its identity is unique:
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`cat /etc/machine-id                   # Should be unique
sudo ls -l /etc/ssh/ssh_host_*_key    # Should exist (regenerated on first boot)
ip a                                   # Should have a fresh DHCP lease`}
                    </pre>
                    Assign a static IP via the router's DHCP static mapping once you've confirmed the clone is healthy.
                </p>
                <ImageCarousel carouselImages={vmTemplateConvertImages} captions={vmTemplateConvertCaptions} />

                {/* ── 4. UniFi Controller VM ───────────────────────────────────── */}
                <h2 className="section-header">4 <span className="section-title">Ubiquiti Controller VM Setup</span></h2>
                <p><strong>Goal:</strong> Deploy a UniFi Network Controller on a Proxmox VM to manage the UniFi access points for the warehouse's wireless mesh network.</p>
                <p><strong>Prerequisites:</strong> A VM cloned from the golden image template with static IP <span className="inline-code">10.1.17.43</span>.</p>

                <h3 className="section-header">4.1 <span className="section-title">Install the UniFi Controller on Ubuntu 24.04</span></h3>
                <p>The UniFi Controller requires Java 17 and MongoDB 6. Here's the full installation sequence:</p>

                <p><strong>Step 1 — Update and install Java:</strong>
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`sudo apt update && sudo apt upgrade -y
sudo apt install openjdk-17-jdk curl gnupg -y
java -version    # Verify Java 17 is installed`}
                    </pre>
                </p>

                <p><strong>Step 2 — Add MongoDB 6.0 repository:</strong>
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`# Import MongoDB GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | \\
  sudo gpg --dearmor -o /usr/share/keyrings/mongodb-server-6.0.gpg

# Add the repo (Jammy repo works on Ubuntu 24)
echo "deb [signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg] \\
  https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | \\
  sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

sudo apt update
sudo apt install mongodb-org-server=6.0.* mongodb-org-shell=6.0.* -y`}
                    </pre>
                </p>

                <p><strong>Step 3 — Add UniFi repository and install:</strong>
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`# Add UniFi GPG key
curl -fsSL https://dl.ui.com/unifi/unifi-repo.gpg | \\
  sudo tee /usr/share/keyrings/unifi-archive-keyring.gpg > /dev/null

# Add UniFi APT repo
echo "deb [signed-by=/usr/share/keyrings/unifi-archive-keyring.gpg] \\
  https://dl.ui.com/unifi/debian stable ubiquiti" | \\
  sudo tee /etc/apt/sources.list.d/unifi.list

sudo apt update
sudo apt install unifi -y
sudo systemctl status unifi    # Verify the service started`}
                    </pre>
                </p>

                <p>Access the UniFi web UI at <span className="inline-code">https://10.1.17.43:8443</span>. Example:
                    <br></br><br></br>
                    <div className="image-container">
                        <img src="/images/Blog_Images/WarehouseNetworkRack\4_unifi_controller/1c_unifi_web_ui_example.png" alt="Blog Image" className="project-images"></img>
                    </div>
                </p>
                
                {/*}
                <ImageCarousel carouselImages={unifiInstallImages} captions={unifiInstallCaptions} />
                */}

                <h4 style={{ marginBottom: ".5em" }}><span className="note">Why a dedicated VM for the controller?</span></h4>
                <p>UniFi access points need a controller to be adopted, configured, and managed. Running it as a VM means it's always available, isolated from other services, and easy to snapshot or restore if something goes wrong during configuration.</p>

                <h3 className="section-header">4.2 <span className="section-title">Enable SSH Access (Recommended)</span></h3>
                <p>To avoid being locked out of the VM if something goes wrong with the network configuration:
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`sudo apt install -y openssh-server
sudo systemctl enable ssh
sudo systemctl start ssh`}
                    </pre>
                    You can now SSH into the controller VM from anywhere on the LAN: <span className="inline-code">ssh administrator@10.1.17.43</span>.
                </p>

                {/* ── 5. Mesh Network ──────────────────────────────────────────── */}
                <h2 className="section-header">5 <span className="section-title">Wireless Mesh Network Setup</span></h2>
                <p><strong>Goal:</strong> Create a wireless LAN connected to the main LAN using UniFi AP AC Pro access points, managed through the UniFi controller VM.</p>

                <h3 className="section-header">5.1 <span className="section-title">Adopt the Access Points</span></h3>
                <p>
                    <ol>
                        <li>Connect each UniFi AP via <strong>PoE ethernet</strong> to the TP-Link switch.</li>
                        <li>Open the UniFi Network web UI at <span className="inline-code">https://10.1.17.43:8443</span>.</li>
                        <li>Navigate to <span className="inline-code">UniFi Devices</span> and click <span className="inline-code">Adopt</span> on each discovered AP.</li>
                    </ol>
                </p>

                <h3 className="section-header">5.2 <span className="section-title">Assign Static IPs to the Access Points</span></h3>
                <p>Keeping APs on static IPs makes management predictable. If the DHCP lease changes, you might lose track of which device is which in the controller.
                    <ol>
                        <li>In the EdgeRouter web UI at <span className="inline-code">https://10.1.16.1</span>, go to <span className="inline-code">Services → DHCP Server → LAN → Actions → Configure Static Map → Leases</span>.</li>
                        <li>Find each AP in the lease list and select <span className="inline-code">Map Static IP</span>, assigning it to a pre-planned IP.</li>
                        <li>Reset each AP after mapping. It should re-adopt with its new static IP showing in the UniFi UI.</li>
                    </ol>
                </p>

                <h3 className="section-header">5.3 <span className="section-title">Create the Wireless Network</span></h3>
                <p>
                    <ol>
                        <li>In the UniFi web UI, go to <span className="inline-code">Settings → WiFi</span> and create a new wireless network.</li>
                        <li>Navigate to <span className="inline-code">Settings → Networks</span> and set the subnet to <span className="inline-code">10.1.16.0/21</span> so wireless clients share the same range as wired devices.</li>
                        <li>Under <span className="inline-code">Settings</span>, create the mesh network so APs can wirelessly uplink to each other if needed.</li>
                    </ol>
                </p>
                <ImageCarousel carouselImages={meshNetworkImages} captions={meshNetworkCaptions} />

                <h4 style={{ marginBottom: ".5em" }}><span className="note">Why mesh?</span></h4>
                <p>In a warehouse setting, cable runs to every corner may not be practical. A UniFi mesh lets APs that can't be wired extend the wireless network by wirelessly connecting back to a wired AP, while still being centrally managed from the same controller.</p>

                {/* ── 6. Security Cameras ──────────────────────────────────────── */}
                <h2 className="section-header">6 <span className="section-title">Security Camera Setup</span></h2>
                <p><strong>Goal:</strong> Connect Wansview W6 outdoor IP cameras to the LAN and verify RTSP stream access for use with Frigate NVR.</p>
                <p><strong>Hardware:</strong> Wansview W6 1080P Outdoor IP Cameras</p>

                <h3 className="section-header">6.1 <span className="section-title">Set Up the Wansview App and Add Cameras</span></h3>
                <p>
                    <ol>
                        <li>On a mobile device, connect to the newly created WiFi network.</li>
                        <li>Connect each camera via <strong>PoE ethernet</strong> to the switch.</li>
                        <li>Install the <strong>Wansview Cloud</strong> app on the mobile device and log into the account.</li>
                        <li>Add each W6 camera using the <span className="inline-code">+</span> icon.</li>
                        <li>Note the device name and MAC address for each camera.</li>
                    </ol>
                </p>

                <h3 className="section-header">6.2 <span className="section-title">Configure Each Camera's Local Account</span></h3>
                <p>In the Wansview app for each camera, go to <span className="inline-code">Settings → Local Application → Local Account</span> and set a local username and password.
                    <br></br><br></br>
                    <span className="note">The Wansview cloud app is useful for initial setup, but for local NVR recording with Frigate, we need direct RTSP stream access using local credentials — not routed through Wansview's cloud servers. This keeps recordings local and removes the dependency on an external service.</span>
                </p>

                <h3 className="section-header">6.3 <span className="section-title">Assign Static IPs to Each Camera</span></h3>
                <p>In the EdgeRouter UI, go to <span className="inline-code">Services → DHCP Server → LAN → Actions → Configure Static Map → Leases</span>. Find each camera's MAC address and assign it a static IP. Disconnect and reconnect the camera's ethernet to trigger the new IP assignment.</p>

                <h3 className="section-header">6.4 <span className="section-title">Verify RTSP Stream Access</span></h3>
                <p>From any computer on the LAN, open VLC and test each camera's RTSP stream:
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`rtsp://<camera_username>:<camera_password>@<camera_ip>:554/live/ch1`}
                    </pre>
                    If VLC displays a live feed, the camera is ready for Frigate.
                </p>
                <ImageCarousel carouselImages={cameraSetupImages} captions={cameraSetupCaptions} />

                {/* ── 7. Docker & Frigate ──────────────────────────────────────── */}
                <h2 className="section-header">7 <span className="section-title">Docker & Frigate NVR Setup</span></h2>
                <p><strong>Goal:</strong> Set up a dedicated Docker + file server (<span className="inline-code">server011</span>) running Frigate as a containerized NVR to record and analyze security camera feeds.</p>
                <p><strong>Hardware:</strong> Z97-A Motherboard, 4790K CPU, 32GB RAM, 2x 256GB SSD (boot), 2x 4TB HDD (storage) — Server IP: <span className="inline-code">10.1.17.41</span></p>
                <p><strong>Important:</strong> Before shutting down this server, always stop Docker cleanly so containers and volumes flush properly:
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`sudo systemctl stop docker
sudo systemctl stop docker.socket
docker ps    # Confirm no active containers`}
                    </pre>
                </p>

                <h3 className="section-header">7.1 <span className="section-title">Set Up RAID1 on Boot and Storage Drives</span></h3>

                <h4 className="section-header">7.1.1 <span className="section-title">Boot Drive RAID1 (Hardware)</span></h4>
                <p>The two 256GB SSDs act as a mirrored boot drive pair. Set this up at the hardware level:
                    <ol>
                        <li>Insert <strong>only the boot drives</strong>.</li>
                        <li>On startup, press <span className="inline-code">Ctrl+I</span> to access the Intel RAID ROM and create a RAID1 array with both SSDs.</li>
                        <li>Install Ubuntu 24.04 with only the boot drives inserted, then power off and insert all drives.</li>
                    </ol>
                </p>

                <h4 className="section-header">7.1.2 <span className="section-title">Storage Drive RAID1 (Software mdadm)</span></h4>
                <p>The two 4TB HDDs are set up as a software RAID1 array. This is the array that Frigate recordings and Docker data will live on.
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`# Check existing drives
lsblk

# Clear any old RAID metadata
sudo mdadm --stop /dev/md124
sudo mdadm --stop /dev/md125
sudo mdadm --zero-superblock /dev/sda
sudo mdadm --zero-superblock /dev/sdb

# Wipe partition tables
sudo wipefs -a /dev/sda
sudo wipefs -a /dev/sdb

lsblk    # Verify both drives are clean

# Create the RAID1 array
sudo mdadm --create /dev/md1 --level=1 --raid-devices=2 /dev/sda /dev/sdb

# Check build progress
cat /proc/mdstat

# Format and mount
sudo mkfs.ext4 /dev/md1
sudo mkdir -p /mnt/storage
sudo mount /dev/md1 /mnt/storage
df -h    # Confirm mount`}
                    </pre>
                </p>

                <h4 className="section-header">7.1.3 <span className="section-title">Make the RAID Mount Permanent</span></h4>
                <p>
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`# Get the UUID of the RAID array
sudo blkid /dev/md1

# Add to fstab so it mounts on every boot
sudo nano /etc/fstab
# Add: UUID=<your-uuid> /mnt/storage ext4 defaults 0 0

# Test the fstab entry
sudo mount -a`}
                    </pre>
                </p>
                <ImageCarousel carouselImages={dockerRaidImages} captions={dockerRaidCaptions} />

                <h4 style={{ marginBottom: ".5em" }}><span className="note">Why software RAID vs hardware RAID for storage?</span></h4>
                <p>The boot drives use Intel's onboard RAID controller, but for the storage drives we use Linux <span className="inline-code">mdadm</span>. Software RAID is <strong>fully transparent to the OS</strong>, easier to recover, and doesn't depend on a specific hardware controller. If the motherboard dies, you can move the drives to another machine and rebuild the array without a matching RAID card.</p>

                <h3 className="section-header">7.2 <span className="section-title">Install Docker</span></h3>
                <p>
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`# SSH into server011
ssh 10.1.17.41

sudo apt update && sudo apt upgrade -y
sudo apt install -y ca-certificates curl gnupg

# Add Docker GPG key
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \\
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add Docker repository
echo \\
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \\
  https://download.docker.com/linux/ubuntu \\
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \\
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine and Compose
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Allow your user to run Docker without sudo
sudo usermod -aG docker $USER

# Reboot and test
sudo reboot
docker run hello-world`}
                    </pre>
                </p>

                <h3 className="section-header">7.3 <span className="section-title">Move Docker's Data Root to the RAID Array</span></h3>
                <p>By default, Docker stores everything on the boot SSD. We want recordings and container data on the RAID array to keep the boot drive clean and take advantage of the larger storage.
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`sudo systemctl stop docker
sudo mkdir -p /mnt/storage/docker

# Point Docker to the new location
sudo nano /etc/docker/daemon.json
# Add: { "data-root": "/mnt/storage/docker" }

sudo systemctl start docker

# Verify
docker info | grep "Docker Root Dir"
# Should show: Docker Root Dir: /mnt/storage/docker`}
                    </pre>
                </p>

                <h3 className="section-header">7.4 <span className="section-title">Set Up the Frigate Container</span></h3>
                <p>Frigate is an open-source NVR that uses hardware-accelerated video decoding and real-time object detection. We'll run it as a Docker container with directories stored on the RAID array.</p>

                <p><strong>Step 1 — Create Frigate directories on the RAID:</strong>
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`sudo mkdir -p /mnt/storage/frigate-config
sudo mkdir -p /mnt/storage/frigate-media
sudo chown -R $USER:$USER /mnt/storage/frigate-config /mnt/storage/frigate-media`}
                    </pre>
                </p>

                <p><strong>Step 2 — Create the Frigate config file at </strong><span className="inline-code">/mnt/storage/frigate-config/config.yml</span>:
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`mqtt:
  enabled: false

detectors:
  cpu1:
    type: cpu

ffmpeg:
  hwaccel_args:
    - -hwaccel
    - vaapi
    - -hwaccel_device
    - /dev/dri/renderD128
    - -hwaccel_output_format
    - yuv420p

objects:
  track:
    - person
    - car

cameras:
  warehouse_cam_1:
    ffmpeg:
      inputs:
        - path: rtsp://<camera_username>:<camera_password>@<camera_ip>:554/live/ch1
          roles:
            - detect
            - record
    detect:
      enabled: true
      width: 1920
      height: 1080
      fps: 5`}
                    </pre>
                </p>

                <p><strong>Step 3 — Create the Docker Compose file at </strong><span className="inline-code">/opt/frigate/docker-compose.yml</span>:
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`services:
  frigate:
    container_name: frigate
    image: ghcr.io/blakeblackshear/frigate:stable
    restart: unless-stopped
    shm_size: "512mb"
    devices:
      - /dev/dri/renderD128:/dev/dri/renderD128
    volumes:
      - /mnt/storage/frigate-config:/config
      - /mnt/storage/frigate-media:/media/frigate
      - /etc/localtime:/etc/localtime:ro
    ports:
      - "5000:5000"
      - "8554:8554"`}
                    </pre>
                </p>

                <p><strong>Step 4 — Start Frigate:</strong>
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`cd /opt/frigate
docker compose up -d
docker ps               # Confirm running
docker logs -f frigate  # Watch logs`}
                    </pre>
                    Open Frigate's web UI at <span className="inline-code">http://10.1.17.41:5000</span>.
                </p>
                <ImageCarousel carouselImages={frigateSetupImages} captions={frigateSetupCaptions} />

                <h4 style={{ marginBottom: ".5em" }}><span className="note">Why shm_size: 512mb?</span></h4>
                <p>Frigate uses shared memory for inter-process communication between ffmpeg and its detection pipeline. Without enough shared memory, ffmpeg will crash under load. 512MB is a safe starting point for multiple camera streams.</p>

                <h4 style={{ marginBottom: ".5em" }}><span className="note">Why VAAPI hardware acceleration?</span></h4>
                <p>The 4790K supports Intel Quick Sync Video via <span className="inline-code">/dev/dri/renderD128</span>, allowing hardware-accelerated video decoding. Without this, Frigate would decode all camera streams in software <span className="inline-note">(significantly more CPU-intensive)</span>. VAAPI lets the GPU handle decoding while the CPU focuses on object detection.</p>

                <h4 style={{ marginBottom: ".5em" }}><span className="note">Why fps: 5 for detection?</span></h4>
                <p>Running detection at 5 FPS significantly reduces CPU load while still catching motion events. You don't need to analyze every frame to detect a person walking through frame. Full 1080p footage is still recorded continuously; the <span className="inline-code">fps</span> setting only controls how often the detection model runs.</p>

                <h3 className="section-header">7.5 <span className="section-title">Troubleshooting: Ghost Docker Container Cleanup</span></h3>
                <p>During setup, I ran into a situation where Docker had leftover ghost containers and a corrupted data directory on the RAID. If you ever encounter this, here's the clean reset procedure.</p>
                <p><span className="highlight-red">⚠️ This deletes all existing containers and volumes, but keeps your images and RAID data intact.</span>
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`# Stop Docker completely
sudo systemctl stop docker
sudo systemctl stop docker.socket

# Move the old Docker directory aside as a backup
sudo mv /mnt/storage/docker /mnt/storage/docker.old

# Create a clean Docker root
sudo mkdir -p /mnt/storage/docker
sudo chown root:root /mnt/storage/docker
sudo chmod 711 /mnt/storage/docker

# Restart Docker fresh
sudo systemctl daemon-reexec
sudo systemctl start docker

# Verify clean state
docker info | grep "Docker Root Dir"
docker ps -a    # Should show no containers

# Recreate Frigate directories and bring it back up
sudo mkdir -p /opt/frigate/{config,media}
sudo chown -R $USER:$USER /opt/frigate
cd /opt/frigate
docker compose up       # Run in foreground first to confirm
docker compose up -d    # Then detach`}
                    </pre>
                </p>

                {/* ── 8. Cloud Backup ──────────────────────────────────────────── */}
                <h2 className="section-header">8 <span className="section-title">Cloud Backup for Camera Recordings</span></h2>
                <p><strong>Goal:</strong> Automatically upload Frigate's local recording segments to Backblaze B2 cloud storage for long-term retention, since local RAID storage only keeps 7 days of footage.</p>

                <p><strong>Retention strategy:</strong>
                    <ul>
                        <li><strong>Frigate local RAID</strong> — 7 days (rolling, managed by Frigate)</li>
                        <li><strong>Backblaze B2</strong> — Permanent archive of all footage</li>
                    </ul>
                </p>

                <h3 className="section-header">8.1 <span className="section-title">Prepare the Backblaze B2 Bucket</span></h3>
                <p>In your B2 bucket settings, set <strong>File versions → Keep only the latest version</strong>. This enables hard-delete behavior to prevent ghost billing from old file versions. Since we're using <span className="inline-code">rclone copy</span> (which never deletes from the destination). This doesn't affect your data, it just prevents unexpected charges.</p>

                <h3 className="section-header">8.2 <span className="section-title">Install and Configure rclone</span></h3>
                <p>
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`sudo apt update
sudo apt install rclone -y

# Configure rclone with your B2 credentials
rclone config
# Create a remote named "b2" using your B2 KeyID and ApplicationKey

# Verify
rclone lsd b2:    # Should show your bucket`}
                    </pre>
                </p>

                <h3 className="section-header">8.3 <span className="section-title">Create the Backup Script</span></h3>
                <p>
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`mkdir -p /mnt/storage/frigate-backup/logs
nano /mnt/storage/frigate-backup/b2_recordings_copy.sh`}
                    </pre>
                    Script contents:
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`#!/bin/bash
LOG="/mnt/storage/frigate-backup/logs/b2_recordings_$(date +%F).log"

rclone copy \\
  /mnt/storage/frigate-media/recordings \\
  b2:YOUR_BUCKET_NAME/frigate-recordings \\
  --ignore-existing \\
  --transfers 8 \\
  --checkers 16 \\
  --fast-list \\
  >> "$LOG" 2>&1`}
                    </pre>
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`chmod +x /mnt/storage/frigate-backup/b2_recordings_copy.sh

# Fix permissions so cron can write logs
sudo chown -R server011:server011 /mnt/storage/frigate-backup`}
                    </pre>
                </p>

                <h3 className="section-header">8.4 <span className="section-title">Test Manually and Automate with Cron</span></h3>
                <p>Run the script manually first to confirm uploads start and a log file appears in <span className="inline-code">/mnt/storage/frigate-backup/logs/</span>:
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`/mnt/storage/frigate-backup/b2_recordings_copy.sh`}
                    </pre>
                    Then add a cron job to run it every 15 minutes:
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`crontab -e
# Add:
*/15 * * * * /mnt/storage/frigate-backup/b2_recordings_copy.sh`}
                    </pre>
                </p>
                <ImageCarousel carouselImages={cloudBackupImages} captions={cloudBackupCaptions} />

                <h4 style={{ marginBottom: ".5em" }}><span className="note">Why --ignore-existing?</span></h4>
                <p>This flag tells rclone to skip files that already exist at the destination. Combined with <span className="inline-code">--fast-list</span> (which uses B2's efficient listing API), the script stays fast even when thousands of recording files already exist in the bucket. It's also safe to run frequently since it never re-uploads or overwrites anything already synced.</p>

                {/* ── 9. UPS Network Setup ─────────────────────────────────────── */}
                <h2 className="section-header">9 <span className="section-title">UPS Network Setup</span></h2>
                <p><strong>Goal:</strong> Connect the APC UPS to the LAN and configure Proxmox to automatically shut down VMs gracefully when the battery gets low.</p>
                <p><strong>Hardware:</strong> APC UPS (SUA2200RMXL3U) with AP9617 network card installed</p>

                <h3 className="section-header">9.1 <span className="section-title">Obtain the UPS MAC Address via Wireshark</span></h3>
                <p>The AP9617 network card uses a default IP that we need to discover before we can configure it. We'll use Wireshark to capture the DHCP discovery broadcast the card sends on reset.
                    <ol>
                        <li>Plug your laptop and the UPS into the same switch.</li>
                        <li>Start a Wireshark packet capture.</li>
                        <li>Set the display filter to: <span className="inline-code">eth.addr contains 00:c0:b7</span></li>
                        <li>Press and hold the reset button on the UPS for <strong>20 seconds</strong>.</li>
                        <li>The AP9617 card will send DHCP discovery packets. Look for them and note:
                            <ul>
                                <li className="indented">The source <strong>MAC address</strong></li>
                                <li className="indented">The source <strong>IP</strong> (the UPS's current IP)</li>
                                <li className="indented">The IP in the <strong>"Who has [IP]?"</strong> ARP message — this is the IP you'll need to set your laptop to</li>
                            </ul>
                        </li>
                        <li>Open Command Prompt as administrator and run <span className="inline-code">arp -a</span> to confirm the MAC is listed.</li>
                        <li>Set your laptop's network adapter to:
                            <ul>
                                <li className="indented"><strong>IP:</strong> the "Who has" IP from step 5</li>
                                <li className="indented"><strong>Subnet:</strong> <span className="inline-code">255.255.255.0</span></li>
                                <li className="indented"><strong>Gateway:</strong> (leave blank)</li>
                            </ul>
                        </li>
                        <li>Access the UPS web UI at <span className="inline-code">http://[UPS current IP]</span> with default credentials <span className="inline-code">apc</span> / <span className="inline-code">apc</span>.</li>
                    </ol>
                    <div className="image-container">
                        <img src="/images/Blog_Images/WarehouseNetworkRack/9_ups_setup/1a_wireshark_filter.png" alt="Blog Image" className="project-images"></img>
                    </div>
                </p>
                {/*<ImageCarousel carouselImages={upsWiresharkImages} captions={upsWiresharkCaptions} />*/}

                <h4 style={{ marginBottom: ".5em" }}><span className="note">Why Wireshark?</span></h4>
                <p>The AP9617 doesn't have a display or USB interface. The only way to discover its current IP is by capturing the DHCP broadcast it sends on reset. This is a common technique for gaining initial access to network devices whose IPs you don't know.</p>

                <h3 className="section-header">9.2 <span className="section-title">Set New UPS Network Settings</span></h3>
                <p>In the UPS web UI, navigate to <span className="inline-code">Administration → Network → Manual</span> and set:
                    <ul>
                        <li><strong>System IP:</strong> <span className="inline-code">10.1.17.42</span></li>
                        <li><strong>Subnet Mask:</strong> <span className="inline-code">255.255.248.0</span></li>
                        <li><strong>Default Gateway:</strong> <span className="inline-code">10.1.16.1</span></li>
                    </ul>
                    Click Apply, then hold the reset button on the back of the UPS for 30 seconds. Run <span className="inline-code">arp -a</span> again to confirm the MAC is now tied to <span className="inline-code">10.1.17.42</span>.
                </p>

                <h3 className="section-header">9.3 <span className="section-title">Configure SNMPv1 on the UPS Network Card</span></h3>
                <p>NUT communicates with the UPS over SNMP. The AP9617 is an older card that uses SNMPv1.
                    <ol>
                        <li>Access the web UI at <span className="inline-code">http://10.1.17.42</span>.</li>
                        <li>Navigate to <span className="inline-code">Administration → Network → SNMPv1 → Access</span> and check <strong>Enable SNMPv1 access</strong>, then Apply.</li>
                        <li>Navigate to <span className="inline-code">SNMPv1 → Access Control</span> and configure a community entry:
                            <ul>
                                <li className="indented"><strong>Community Name:</strong> <span className="inline-code">public</span></li>
                                <li className="indented"><strong>NMS IP/Host Name:</strong> <span className="inline-code">10.1.17.40</span> (Proxmox host)</li>
                                <li className="indented"><strong>Access Type:</strong> Read</li>
                            </ul>
                        </li>
                    </ol>
                    <span className="note">Ideally we'd use SNMPv3 (more secure), but the AP9617 is an older card that defaults to SNMPv1. In our private LAN environment this is acceptable. If you change the community name from "public", you'll need to update it in both the UPS web UI and in the NUT config on Proxmox.</span>
                    <br></br><br></br>
                    <div className="image-container">
                        <img src="/images/Blog_Images/WarehouseNetworkRack/9_ups_setup/2a_ups_web_ui.png" alt="Blog Image" className="project-images"></img>
                    </div>
                </p>

                <h3 className="section-header">9.4 <span className="section-title">Install and Configure NUT on Proxmox</span></h3>
                <p>NUT (Network UPS Tools) is the software on Proxmox that monitors the UPS and triggers a graceful shutdown when the battery gets low.
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`apt update
apt install nut nut-snmp snmp -y`}
                    </pre>
                </p>

                <p><strong>Set NUT mode</strong> (<span className="inline-code">/etc/nut/nut.conf</span>):
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`MODE=standalone`}
                    </pre>
                </p>

                <p><strong>Configure the UPS connection</strong> (<span className="inline-code">/etc/nut/ups.conf</span>):
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`[apc_ups]
driver = snmp-ups
port = 10.1.17.42
community = public
snmp_version = v1
pollfreq = 15`}
                    </pre>
                </p>

                <p><strong>Create NUT users</strong> (<span className="inline-code">/etc/nut/upsd.users</span>):
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`[proxmox]
  password = <your_strong_password>
  upsmon master`}
                    </pre>
                </p>

                <p><strong>Configure the UPS monitor</strong> (<span className="inline-code">/etc/nut/upsmon.conf</span>) — values must match exactly:
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`MONITOR apc_ups@localhost 1 proxmox <your_strong_password> master`}
                    </pre>
                    Where:
                    <ul>
                        <li><span className="inline-code">apc_ups</span> — UPS name (must match <span className="inline-code">ups.conf</span>)</li>
                        <li><span className="inline-code">@localhost</span> — NUT server is running on the same host</li>
                        <li><span className="inline-code">1</span> — number of power supplies (always 1 here)</li>
                        <li><span className="inline-code">master</span> — this host controls shutdown</li>
                    </ul>
                </p>

                <p><strong>Configure NUT to listen locally</strong> (<span className="inline-code">/etc/nut/upsd.conf</span>):
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`LISTEN 127.0.0.1 3493`}
                    </pre>
                </p>

                <p><strong>Set permissions, enable on boot, and test:</strong>
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`chown root:nut /etc/nut/ups.conf
chmod 640 /etc/nut/ups.conf
systemctl enable nut-server nut-monitor

upsdrvctl start
systemctl restart nut-server nut-monitor

# Test connectivity to UPS
upsc apc_ups@localhost

# Confirm NUT monitor is running
systemctl status nut-monitor`}
                    </pre>
                    A successful <span className="inline-code">upsc</span> output will show UPS status values including <span className="highlight-green">ups.status: OL</span> (online), battery charge, and other metrics.
                </p>
                {/*<ImageCarousel carouselImages={upsConfigImages} captions={upsConfigCaptions} /> */}

                <h4 style={{ marginBottom: ".5em" }}><span className="note">Troubleshooting: Missing snmp-ups driver</span></h4>
                <p>On Proxmox 8 (Debian Bookworm), the <span className="inline-code">snmp-ups</span> driver binary may not be included in the base <span className="inline-code">nut</span> package. If <span className="inline-code">upsdrvctl start</span> fails with a missing driver error, run:
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`apt install nut-driver-scripts snmp -y
ls -l /lib/nut/snmp-ups    # Confirm binary exists
upsdrvctl start`}
                    </pre>
                    If it's still missing, installing <span className="inline-code">nut-snmp</span> separately or compiling the driver from source will resolve it.
                </p>

                <h3 className="section-header">9.5 <span className="section-title">Tune VM Shutdown Order (Optional but Recommended)</span></h3>
                <p>In the Proxmox web UI, for each VM, go to <span className="inline-code">VM → Options → Start/Shutdown order</span> and set a startup order, shutdown order, and shutdown timeout (120–300 seconds per VM). This ensures critical services power down in the right sequence rather than all at once.</p>

                <h3 className="section-header">9.6 <span className="section-title">Test Graceful Shutdown (Without Pulling Power)</span></h3>
                <p>Never test shutdown by physically cutting power. Use NUT's built-in forced shutdown command instead:
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`# Simulate "low battery" — triggers the exact same shutdown path as a real power event
upsmon -c fsd

# Watch it live in another terminal
journalctl -f`}
                    </pre>
                    After the host comes back up, verify NUT is still working:
                    <pre style={{backgroundColor: '#eaeaea', padding: '1rem', borderRadius: '8px', fontFamily: "'Segoe UI Mono', Consolas, monospace", fontSize: '0.9rem', overflowX: 'auto', marginTop: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.6'}}>
{`upsc apc_ups@localhost
systemctl status nut-monitor`}
                    </pre>
                </p>

                {/* ── III. Conclusion ──────────────────────────────────────────── */}
                <h1 className="section-header">III. <span className="section-title">Conclusion</span></h1>

                <h2 className="section-header"><span className="section-title">What I Learned</span></h2>
                <p>Building this rack for the warehouse expansion was a full-stack networking and infrastructure project. Along the way, I reinforced and picked up the following:
                    <br></br><br></br>
                    <strong>Networking</strong>
                    <ul>
                        <li>Designing a <span className="inline-code">/21</span> subnet from scratch and configuring a managed router and switch to match</li>
                        <li>Assigning static IPs via DHCP static mapping for predictable device addressing</li>
                        <li>UniFi mesh network deployment and AP adoption workflow</li>
                    </ul>

                    <strong>Virtualization & Servers</strong>
                    <ul>
                        <li>Installing and configuring Proxmox VE on physical hardware</li>
                        <li>Building a reusable VM golden image and clone workflow to speed up future deployments</li>
                        <li>Managing ZFS mirrors and software RAID arrays</li>
                    </ul>

                    <strong>Containers & NVR</strong>
                    <ul>
                        <li>Deploying Frigate via Docker Compose with hardware-accelerated video decoding (VAAPI)</li>
                        <li>Tuning Frigate's detection pipeline for a balance of accuracy and CPU efficiency</li>
                        <li>Troubleshooting Docker data root migrations and ghost container cleanup</li>
                    </ul>

                    <strong>Backup & Automation</strong>
                    <ul>
                        <li>Using <span className="inline-code">rclone</span> + Backblaze B2 for cloud-native backup of video recordings</li>
                        <li>Automating backup with cron for near-real-time offsite copies</li>
                    </ul>

                    <strong>UPS & Power Management</strong>
                    <ul>
                        <li>Discovering a networkless device's IP using Wireshark packet capture</li>
                        <li>Configuring SNMP on legacy network cards</li>
                        <li>Integrating NUT with Proxmox for automated graceful VM shutdown on power loss</li>
                    </ul>
                </p>

                <h2 className="section-header"><span className="section-title">Next Steps</span></h2>
                <p>This rack build is functional, but there's always more to refine:
                    <ul>
                        <li>Add a <strong>Coral USB accelerator</strong> or dedicated GPU to Frigate for hardware object detection (currently using CPU-based detection)</li>
                        <li>Explore Frigate's <strong>person/vehicle notification integration</strong> with Home Assistant or a custom webhook</li>
                        <li>Add <strong>VLANs</strong> to isolate camera traffic from general LAN traffic for better network security segmentation</li>
                        <li>Set up <strong>Proxmox Backup Server</strong> for VM-level backups in addition to file-level cloud backup</li>
                        <li>Document a full <strong>disaster recovery runbook</strong>: what happens if the Proxmox host dies, the RAID degrades, or the UPS fails to trigger shutdown in time</li>
                    </ul>
                </p>

            </div>
        </>
    );
}

export default WarehouseNetworkRackBlog;
