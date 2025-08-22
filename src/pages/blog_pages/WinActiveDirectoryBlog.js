import BlogPageIntro from "../../components/BlogPageIntro";
import ImageCarousel from "../../components/ImageCarousel";
import FileTree from "../../components/FileTree";
import { Link as ScrollLink } from 'react-scroll';


import "../../stylesheets/ProjectPage.css"
import "../../stylesheets/Blog.css";

export function WinActiveDirectoryBlog() {
    const introDetails = {
        projectTitle: "Windows Active Directory Lab Setup Guide",
        readTime: "23 minute read",
        introText: ["In this guide, I walk through <strong>building a simulated small-enterprise Windows network lab using multiple virtual machines</strong>. The lab environment includes a <strong>Windows Server 2022 machine configured as a Domain Controller</strong> and one or more <strong>Windows 10 client machines joined to the domain</strong>.",
            "This guide provides <strong>hands-on experience</strong> with core Windows administration tasks such as <strong>configuring Active Directory</strong>, <strong>creating and managing users</strong>, and <strong>applying group policies</strong>, the same tasks used in a real IT environment. Along the way, I try to explain key concepts and reasoning behind each step I chose, making this guide useful as a lab walkthrough and as a learning resource for myself and others."
        ],
        columnTitles: ["Type📁", "Tools Used🛠️", "Skills Learned🧠"],
        columnRowsInfo: [
            ["IT Guide", "Networking"],
            ["VirtualBox", "Windows Server 2022", "Windows 10"],
            ["Active Directory", "Group Policy Objects (GPOs)", "Network Configuration", "User Management", "Windows Server Administration"]
        ],
        labSource: "",
        labLink: ""
    };

    const fileTreeData = [
        {
            type: "drive",
            name: "VM_Lab",
            children: [
                {
                    type: "folder",
                    name: "ISOs",
                },
                {
                    type: "folder",
                    name: "VMs",
                },
                {
                    type: "folder",
                    name: "Scripts",
                }
            ]
        }
    ]

    // Images for formatting USB drive
    const CreatingTheServerVMImages = [
        "/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/1a_windows_server_setup.png",
        "/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/1b_windows_server_setup.png",
        "/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/1c_windows_server_setup.png",
        "/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/1d_windows_server_setup.png"
    ]
    const CreatingTheServerVMCaptions = [
        "Name and Operating System options",
        "Unattended Install options",
        "Hardware Options",
        "Hard Disk options",
    ];

    // Images for installing Windows Server
    const InstallingWindowsServerImages = [
        "/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/5a_windows_server_installation.png",
        "/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/5b_windows_server_installation.png",
        "/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/5c_windows_server_installation.png",
        "/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/5d_windows_server_installation.png"
    ]
    const InstallingWindowsServerCaptions = [
        "Continue with defaults and install.",
        "Select \"Windows Server 2022 Standard Evaluation (Desktop Experience)\" and agree to License terms.",
        "Select \"Custom\" installation to do a clean install.",
        "Select the empty partition you created and proceed."
    ]

    // Images for creating Windows 10 VM
    const CreatingWindows10VMImages = [
        "/images/Blog_Images/WinActiveDirectory/3_client_VM_setup/1a_client_windows_10_VM_setup.png",
        "/images/Blog_Images/WinActiveDirectory/3_client_VM_setup/1b_client_windows_10_VM_setup.png",
        "/images/Blog_Images/WinActiveDirectory/3_client_VM_setup/1c_client_windows_10_VM_setup.png",
        "/images/Blog_Images/WinActiveDirectory/3_client_VM_setup/1d_client_windows_10_VM_setup.png",
    ]
    const CreatingWindows10VMCaptions = [
        "Name and Operating System options",
        "Unattended Install options",
        "Hardware Options",
        "Hard Disk options",
    ]

    //Images for fixing potential product key issue in Windows 10 VM
    const FixingProductKeyIssueImages = [
        "/images/Blog_Images/WinActiveDirectory/3_client_VM_setup/2a_fixing_product_key.png",
        "/images/Blog_Images/WinActiveDirectory/3_client_VM_setup/2b_fixing_product_key.png"
    ]
    const FixingProductKeyIssueCaptions = [
        "Potential product key error",
        "Steps 2-5 screen"
    ];

    // Images for installing Windows 10
    const Windows10InstallationImages = [
        "/images/Blog_Images/WinActiveDirectory/3_client_VM_setup/3a_windows_installation.png",
        "/images/Blog_Images/WinActiveDirectory/3_client_VM_setup/3b_windows_installation.png",
        "/images/Blog_Images/WinActiveDirectory/3_client_VM_setup/3c_windows_installation.png",
        "/images/Blog_Images/WinActiveDirectory/3_client_VM_setup/3d_windows_installation.png",
        "/images/Blog_Images/WinActiveDirectory/3_client_VM_setup/3e_windows_installation.png",
        "/images/Blog_Images/WinActiveDirectory/3_client_VM_setup/3f_windows_installation.png"
    ]
    const Windows10InstallationCaptions = [
        "Step 1 screen",
        "Step 2 screen",
        "Step 3 screen",
        "Step 4 screen",
        "Step 5 screen",
        "Step 6 screen",
    ];

    // Images for connecting VMs to same internal network
    const connectingInternalNetworkImages = [
        "/images/Blog_Images/WinActiveDirectory/4_internal_network_setup/1a_client_internal_network_setup.png",
        "/images/Blog_Images/WinActiveDirectory/4_internal_network_setup/1b_server_internal_network_setup.png"
    ]
    const connectingInternalNetworkCaptions = [
        "Visual reference for client steps",
        "Visual reference for server steps"
    ];


    // Images for installing AD DS role
    const ADDSRoleInstallationImages = [
        "/images/Blog_Images/WinActiveDirectory/2_promote_server_to_domain_controller/1a_install_ad_dc_role.png",
        "/images/Blog_Images/WinActiveDirectory/2_promote_server_to_domain_controller/1b_install_ad_dc_role.png",
        "/images/Blog_Images/WinActiveDirectory/2_promote_server_to_domain_controller/1c_install_ad_dc_role.png",
        "/images/Blog_Images/WinActiveDirectory/2_promote_server_to_domain_controller/1d_install_ad_dc_role.png",
        "/images/Blog_Images/WinActiveDirectory/2_promote_server_to_domain_controller/1e_install_ad_dc_role.png",
        "/images/Blog_Images/WinActiveDirectory/2_promote_server_to_domain_controller/1f_install_ad_dc_role.png",
        "/images/Blog_Images/WinActiveDirectory/2_promote_server_to_domain_controller/1g_install_ad_dc_role.png",
    ]
    const ADDSRoleInstallationCaptions = [
        "Visual reference for step 3",
        "Visual reference for step 4",
        "Visual reference for step 5",
        "Visual reference for step 6a",
        "Visual reference for step 6b",
        "Visual reference for step 7",
        "Visual reference for step 8",
    ];

    // Images for promoting server to domain controller
    const promoteServerToDCImages = [
        "/images/Blog_Images/WinActiveDirectory/2_promote_server_to_domain_controller/2a_promote_to_dc.png",
        "/images/Blog_Images/WinActiveDirectory/2_promote_server_to_domain_controller/2b_promote_to_dc.png",
        "/images/Blog_Images/WinActiveDirectory/2_promote_server_to_domain_controller/2c_promote_to_dc.png",
        "/images/Blog_Images/WinActiveDirectory/2_promote_server_to_domain_controller/2d_promote_to_dc.png",
        "/images/Blog_Images/WinActiveDirectory/2_promote_server_to_domain_controller/2e_promote_to_dc.png",
        "/images/Blog_Images/WinActiveDirectory/2_promote_server_to_domain_controller/2f_promote_to_dc.png",
        "/images/Blog_Images/WinActiveDirectory/2_promote_server_to_domain_controller/2g_promote_to_dc.png",
        "/images/Blog_Images/WinActiveDirectory/2_promote_server_to_domain_controller/2h_promote_to_dc.png",
    ];
    const promoteServerToDCCaptions = [
        "Visual reference for step 1a",
        "Visual reference for step 1b",
        "Visual reference for step 2",
        "Visual reference for step 3",
        "Visual reference for step 4",
        "Visual reference for step 5",
        "Visual reference for step 6",
        "Visual reference for step 7",
    ];

    // Images for creating OUs
    const creatingOUsImages = [
        "/images/Blog_Images/WinActiveDirectory/6_creating_OUs_groups_users/1a_creating_OUs.png",
        "/images/Blog_Images/WinActiveDirectory/6_creating_OUs_groups_users/1b_creating_OUs.png",
        "/images/Blog_Images/WinActiveDirectory/6_creating_OUs_groups_users/1c_creating_OUs.png"
    ];
    const creatingOUsCaptions = [
        "Visual reference for steps 1-2",
        "Visual reference for steps 3-4",
        "Visual reference for step 7"
    ];

    // Images for creating groups
    const creatingGroupsImages = [
        "/images/Blog_Images/WinActiveDirectory/6_creating_OUs_groups_users/2a_creating_groups.png",
        "/images/Blog_Images/WinActiveDirectory/6_creating_OUs_groups_users/2b_creating_groups.png",
    ]
    const creatingGroupsCaptions = [
        "Visual reference for steps 2-3",
        "Visual reference for steps 4-7"
    ];

    // Images for creating users
    const creatingUsersImages = [
        "/images/Blog_Images/WinActiveDirectory/6_creating_OUs_groups_users/3a_creating_users.png",
        "/images/Blog_Images/WinActiveDirectory/6_creating_OUs_groups_users/3b_creating_users.png",
        "/images/Blog_Images/WinActiveDirectory/6_creating_OUs_groups_users/3c_creating_users.png",
        "/images/Blog_Images/WinActiveDirectory/6_creating_OUs_groups_users/3d_creating_users.png",
        "/images/Blog_Images/WinActiveDirectory/6_creating_OUs_groups_users/3e_creating_users.png",
        "/images/Blog_Images/WinActiveDirectory/6_creating_OUs_groups_users/3f_creating_users.png"
    ]
    const creatingUsersCaptions = [
        "Visual reference for steps 2-3",
        "Visual reference for step 4",
        "Visual reference for step 6",
        "Visual reference for step 7",
        "Visual reference for step 8",
        "Visual reference for step 9"
    ];

    // Images for creating GPOs
    const creatingGPOsImages = [
        "/images/Blog_Images/WinActiveDirectory/7_applying_group_policies/1a_creating_GPO.png",
        "/images/Blog_Images/WinActiveDirectory/7_applying_group_policies/1b_creating_GPO.png",
        "/images/Blog_Images/WinActiveDirectory/7_applying_group_policies/1c_editing_GPO.png",
        "/images/Blog_Images/WinActiveDirectory/7_applying_group_policies/1d_editing_GPO.png",
        "/images/Blog_Images/WinActiveDirectory/7_applying_group_policies/1e_editing_GPO.png",
        "/images/Blog_Images/WinActiveDirectory/7_applying_group_policies/1f_editing_GPO.png",
        "/images/Blog_Images/WinActiveDirectory/7_applying_group_policies/1g_editing_GPO.png",

    ]
    const creatingGPOsCaptions = [
        "Visual reference for steps 2-4a",
        "Visual reference for step 4b",
        "Visual reference for step 5",
        "Visual reference for step 6a",
        "Visual reference for step 6a",
        "Visual reference for step 6b",
        "Visual reference for step 6b"
    ];

    // Images for applying/linking GPOs
    const linkingGPOsImages = [
        "/images/Blog_Images/WinActiveDirectory/7_applying_group_policies/2a_linking_GPO.png",
        "/images/Blog_Images/WinActiveDirectory/7_applying_group_policies/2b_linking_GPO.png",
    ]
    const linkingGPOsCaptions = [
        "Visual reference for steps 2-3a",
        "Visual reference for steps 3b-4"
    ];
    return (
        <>
            <div className="project-page-container">
                <BlogPageIntro {...introDetails} />

                <h1 className="section-header">I. <span className="section-title">Introduction & Background</span></h1>

                <h2 className="section-header">• <span className="section-title">Why I Built This Guide</span></h2>
                <p>I built this guide for two reasons:
                    <ol>
                        <li>Strengthen my hands-on skills in areas commonly used in IP support, system administration, and cybersecurity roles, including:
                            <ul>
                                <li><strong>Active Directory (AD)</strong></li>
                                <li><strong>Group Policy Objects (GPOs)</strong></li>
                                <li><strong>Network configuration</strong></li>
                                <li><strong>User management</strong></li>
                            </ul>
                        </li>
                        <li>To create a reproduible testing environment for:
                            <ul>
                                <li><strong>CyberSecurity practice</strong></li>
                                <li><strong>IT training</strong></li>
                                <ul><strong>Advanced Windows administration tasks</strong></ul>
                            </ul>
                            <p>Referencing this guide, I can quickly rebuild a consistent lab setup for future projects, troubleshooting, or skill refreshers.</p>
                            <p>While this guide was designed for my own use, I’ve written it so that anyone can follow along to build their own Windows Server lab. I’ve also included the reasoning behind my choices to help both myself and any potential readers understand the decision-making process.</p>
                        </li>
                    </ol>
                </p>

                <h2 className="section-header">• <span className="section-title">Hardware and Software Prerequisites</span></h2>
                <p>Components Overview:
                    <ul>
                        <li><strong>Host PC</strong> - Your laptop/PC with minimum 16 GB RAM (running VirtualBox)</li>
                        <li><strong>External USB Drive</strong> - 80+ GB of free space <span className="inline-note">(If using USB, use USB 3.0+ formatted at NTFS to store VMs and ISOs)</span></li>
                        <li><strong>Virtual Machine 1</strong> - Windows Server 2022 <span className="inline-note">(acting as Domain Controller)</span></li>
                        <li><strong>Virtual Machine 2</strong> - Windows 10 <span className="inline-note">(joined to the domain as a user workstation)</span></li>
                    </ul>
                </p>

                <p>Software Requirements:
                    <ul>
                        <li>VirtualBox (free)</li>
                        <li>Windows Server 2022 Evaluation ISO</li>
                        <li>Windows 10 ISO</li>
                        <li>(Optionally) USB formatter such as Rufus</li>
                    </ul>
                </p>


                <h1 className="section-header">II <span className="section-title">Step-by-Step Lab Guide</span></h1>
                <h2 className="section-header">1 <span className="section-title">Formatting the USB Drive</span></h2>
                <p>To conserve space on my laptop’s internal drive, I used a <strong>256 GB USB 3.0 drive</strong> to store my virtual machines. Before setting up the lab, I formatted the drive using the <strong>NTFS file system</strong> with a <strong>4096-byte allocation unit size</strong> with the volume label: <span className="inline-code">VM_Lab</span>
                    <br></br><br></br>
                    <div className="image-container">
                        <img src="/images/Blog_Images/WinActiveDirectory/0_formatting_USB/rufus_formatting.png" alt="Blog Image" className="project-images"></img>
                    </div>
                </p>

                <p>I chose <strong>NTFS</strong> over exFAT because:
                    <ul>
                        <li>NTFS supports <strong>large VM disk files</strong> (over 4GB) with no issues</li>
                        <li>It providess <strong>better performance and stability</strong> for read/write-heavy workloads like virtual machines</li>
                        <li>It supports <strong>Windows file permissions</strong> and <strong>journaling</strong> (data protection feature which prevents data corruption during crashes or power loss), which are important when storing system-level files or snapshots</li>
                    </ul>
                </p>
                <p>Next, inside of the USB drive, create the folder structure:
                    <br></br>
                    <FileTree data={fileTreeData} />
                </p>
                <p>In VirtualBox settings/preferences, set default VM storage to: <span className="inline-code">D:\VMs</span> (replace <span className="inline-code">D:</span> with your USB drive letter)</p>

                <h2 className="section-header">2 <span className="section-title">Installing and Configuring Windows Server 2022</span></h2>
                <h3 className="section-header">2.1 <span className="section-title">Creating the Server VM</span></h3>
                <p>First, download the&nbsp;
                    <a href="https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2022" target="_blank" rel="noopener noreferrer">
                        Windows Server 2022 Eval ISO
                    </a>
                    &nbsp;and save it to  <span className="inline-code">D:\ISOs</span> in your USB drive. Then, in VirtualBox, press “New” to create a new virtual machine and follow my specifications as shown below.
                </p>
                <p>Recommended Specs:
                    <ul>
                        <li>2-4 GB RAM</li>
                        <li>1-2 CPUs</li>
                        <li>25-30 GB storage, dynamically allocated</li>
                    </ul>
                </p>
                <ImageCarousel carouselImages={CreatingTheServerVMImages} captions={CreatingTheServerVMCaptions} />

                <h4 className="section-header">2.1.1 <span className="section-title">Term Clarification</span></h4>
                <ul>
                    <li>Hostname is used to identify the server on the network (e.g., <span className="inline-code">DC1</span>)</li>
                    <li>Domain Name is used to define the Windows domain (e.g., <span className="inline-code">lab.local</span>) that all users, computers, and policies belong to in Active Directory. </li>
                </ul>

                <h4 className="section-header">2.1.2 <span className="section-title">Why These Settings?</span></h4>
                <ul>
                    <li>
                        <strong>Hostname</strong> = <span className="inline-code">DC1</span>
                        <br></br><span>To clearly indicate that this server is the first Domain Controller in the environment (in case more are added later). With accurate naming, it becomes less confusing in Active Directory, DNS, remote management tools, and event logs, especially as more servers are added.</span>
                    </li>
                    <li>
                        <strong>Domain Name</strong> = <span className="inline-code">lab.local</span>
                        <br></br><span>To mark the environment as private and for testing purposes. The <span className="inline-code">.local</span> extension avoids conflicts with real internet domains (like google.com) and doesn’t require purchasing a domain name or configuring SSL certificates.</span>
                        <span className="note">Here, we are only setting a label for the VM, not the actual domain name.</span>
                    </li>
                    <li>
                        <strong>Product Key</strong> = <span className="inline-code">(leave blank)</span>
                        <br></br><span>Because it is not needed for activation for short-term labs. All functionality we need is included.</span>
                        <span className="inline-note">&nbsp;(Join a domain, Use MMC tools (Group Policy, Users & Computers, etc.), Simulate AD environments)</span>
                    </li>
                </ul>

                <h4 className="section-header">2.1.3 <span className="section-title">Hostname Warning</span></h4>
                <p>Setting the hostname <strong>before installing Active Directory Domain Services (AD DS)</strong> ensures that the correct name is embedded in the system from the start.</p>
                <p>If you rename the server after promoting it to a Domain Controller, <strong>Active Directory and DNS may still refer to the old name</strong>, which can cause:
                    <ul>
                        <li>DNS record mismatches</li>
                        <li>Replication errors between Domain Controllers</li>
                        <li>Metadata inconsitencies in Active Directory</li>
                    </ul>
                    <span>Basically, renaming after promotion will lead to technical issues, so it’s best to name your server correctly <strong>before</strong> proceeding with domain setup.</span>
                </p>


                <h3 className="section-header">2.2 <span className="section-title">Loading the Correct Windows Server Version</span></h3>
                <p>From here, if your Server VM opened and installed, you will have installed the <span className="highlight-red">incorrect</span> Server Core version of Windows Server 2022, which is a minimal, command-line-only interface that looks like:
                    <div className="image-container">
                        <img src="/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/2_windows_server_misconfigured.png" alt="Blog Image" className="project-images"></img>
                    </div>
                </p>
                <p>That’s fine for advanced users and some production servers, but for this guide, we’re using the Desktop Experience of Windows Server, which gives a full GUI like Windows 10/11.</p>
                <p>So, before opening and installing the Server Core version, we need to ensure that the Windows Server VM’s boot order has the optical drive listed first. Do this by:
                    <ol>
                        <li>Shut down the VM if it's running.</li>
                        <li>In VirtualBox, select your VM from the left panel.</li>
                        <li>Click <span className="inline-code">Settings</span> and go to the <span className="inline-code">System</span> tab.</li>
                        <li>Under <span className="inline-code">Boot Order</span>, use the arrows to place <span className="inline-code">Optical</span> at the top of the list.</li>
                    </ol>
                </p>

                <h3 className="section-header">2.3 <span className="section-title">Fixing Potential Windows Server Version Issue</span></h3>
                <p>If you followed the above steps correctly to boot the Optical drive first before installation, <strong>SKIP this section.</strong> Otherwise, like me, you have accidentally installed the Server Core version of Windows Server 2022.</p>
                <p>To fix this mistake, reinstall the correct version by placing the Optical drive at the top of the VM boot order as shown in the previous section and following these steps:
                    <ol>
                        <li>Shut down the VM if it's running, do not save the state.</li>
                        <li>Go to <span className="inline-code">Settings</span> → <span className="inline-code">Storage</span> → <span className="inline-code">Controller: SATA</span></li>
                        <li>Right-click the .vdi → <span className="inline-code">Remove Attachment</span></li>
                        <li>Create a new empty virtual hard disk:</li>
                        <ol type="a">
                            <li>Go to <span className="inline-code">Settings</span> → <span className="inline-code">Storage</span> again</li>
                            <li>Click the hard disk icon <span className="inline-code">Controller: SATA</span> → <span className="inline-code">Add Hard Disk</span> → <span className="inline-code">Create New Disk</span></li>
                            <li>Choose VDI, dynamically allocated, and around 50GB (or whatever size you were using before).</li>
                        </ol>
                        <li>In the folder for this VM on the USB drive, delete the old .vdi file, it’s just wasted space.</li>
                        <li>Start the VM and proceed with installation.</li>
                    </ol>
                </p>

                <h3 className="section-header">2.4 <span className="section-title">Windows Server Installation Process</span></h3>
                <p>If everything has gone well, when opening the Windows Server VM, you should see a screen similar to the first image in the following carousel. Follow each image step as shown.</p>
                <ImageCarousel carouselImages={InstallingWindowsServerImages} captions={InstallingWindowsServerCaptions}></ImageCarousel>

                <h4 className="section-header">2.5 <span className="section-title">Post-Install Server Configuration</span></h4>
                <p>After installing Windows Server 2022, it’s not yet ready to function as part of a network. Here, we will set up a few essential details like setting hostname, configuring network settings, and preparing the server to run roles (like a domain controller).</p>
                <h4 className="section-header">2.5.1 <span className="section-title">Rename the Computer</span></h4>
                <p><strong>Why:</strong> Renaming the server from the initial random set of characters to something identifiable makes management, documentation, and troubleshooting easier, especially when dealing with multiple systems.</p>
                <p><strong>How:</strong>
                    <ol>
                        <li>Open the <span className="inline-code">Server Manager</span> application</li>
                        <li>Click <span className="inline-code"> Local Server</span> on the left</li>
                        <li>Enter preferred device description</li>
                        <li>Click <span className="inline-code">Change</span></li>
                        <li>Enter <span className="inline-code">"DC1"</span> (or your preferred name)</li>
                        <li>Click <span className="inline-code">OK</span> and reboot when prompted</li>
                    </ol>
                    <div className="image-container">
                        <img src="/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/6_set_computer_name_description.png" alt="Blog Image" className="project-images"></img>
                    </div>
                </p>

                <h4 className="section-header">2.5.2 <span className="section-title">Assign a Static IP Address</span></h4>
                <p><strong>Why:</strong> Servers must have consistent IPs so clients can find them reliably to use services such as Active Directory, DNS, or file shares. By default, Windows Servers’ network adapters usually use  DHCP (Dynamic Host Configuration Protocol), which may change the IP address on every reboot.</p>
                <p><strong>How:</strong>
                    <ol>
                        <li>Open <span className="inline-code">Control Panel</span> → <span className="inline-code">Network and Sharing</span></li>
                        <li>Click <span className="inline-code">Change adapter settings</span></li>
                        <li>Right-click your network adapter → <span className="inline-code">Properties</span></li>
                        <li>Choose <span className="inline-code">Use the following IP address</span> with the following values:</li>

                    </ol>
                    <div className="image-container">
                        <img src="/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/7_assign_static_ip_address.png" alt="Blog Image" className="project-images"></img>
                    </div>
                </p>

                <h4 style={{ marginBottom: ".5em" }}><span className="note">Notes for Picking IP Values</span></h4>
                <p><strong>IP Address:</strong> <span className="inline-code">192.168.56.10</span>
                    <br></br>
                    Use any IP within the <strong>private IP address range</strong> 192.168.x.x (specifically, 192.168.0.0 to 192.168.255.255). These addresses are reserved for internal networking and are not routable on the internet.
                </p>
                <p>The .56 is because VirtualBox’s Internal Network mode defaults to the 192.168.56.0/24 subnet. If you use a different range (like 192.168.10.x), you’d need to manually reconfigure VirtualBox network settings. Otherwise, your VMs may not be able to communicate with each other or with the host device.</p>

                <p><strong>Subnet Mask:</strong> <span className="inline-code">255.255.255.0</span>
                    <br></br>
                    <p>This is common for small labs or home networks because it’s simple and supports up to 254 devices on the same subnet, more than enough for lab environments.</p>
                </p>

                <p><strong>Default Gateway:</strong> <span className="inline-code">(leave blank)</span>
                    <br></br>
                    <p>Since this lab uses VirtualBox’s <strong>Internal Network</strong> the VMs are isolated from the internet. A gateway is only needed if you want to route traffic outside the local subnet, which we don’t in this case.</p>
                </p>

                <p><strong>DNS:</strong> <span className="inline-code">127.0.0.1</span>
                    <br></br>
                    <p>127.0.0.1 is the <strong>loopback address</strong>, meaning the server will use itself for DNS lookups. This is required because we’ll be installing the <strong>DNS Server role</strong> and promoting the server to a <strong>Domain Controller</strong> for a private domain like <span className="inline-code">lab.local</span>.</p>
                    <p>By using itself as a DNS server (via 127.0.0.1), the server can resolve internal domain names (such as <span className="inline-code">dc1.lab.local</span>) for itself. Once the DNS Server role is installed and the domain is set up, this server will provide the same name resolution services to any client machines that join the domain. This is essential because domain features like logins, Group Policy, and locating services inside the lab environment such as file servers, mail servers, etc.</p>
                </p>

                <h4 className="section-header">2.5.3 <span className="section-title">Enable Remote Desktop</span></h4>
                <p><strong>Why:</strong> Remote Desktop allows you to manage the server from another computer, just like system administrators (sysadmins) and other IT professionals often do in real environments.</p>
                <p><strong>How: </strong>
                    <br></br>
                    <ol>
                        <li>In <span className="inline-code">Server Manager</span>, click <span className="inline-code">Local Server</span></li>
                        <li>Click <span className="inline-code">Remote Desktop: Disabled</span></li>
                        <li>Choose <span className="inline-codee">Allow remote computers to this computer</span></li>
                        <li>Apply changes and allow through firewall if prompted</li>
                    </ol>
                    <div className="image-container">
                        <img src="/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/8_enable_remote_desktop.png" alt="Blog Image" className="project-images"></img>
                    </div>
                </p>

                <h4 className="section-header">2.5.4 <span className="section-title">Disable IE Enhanced Security Configuration</span></h4>
                <p><strong>Why:</strong> Internet Explorer Enhanced Security blocks downloads and many websites by default. Disable it to download tools as needed in a test lab such as:
                    <ul>
                        <li>Remote Server Administration Tools</li>
                        <li>Group Policy Templates</li>
                        <li>WireShark</li>
                        <li>Alternative browsers</li>
                    </ul>
                </p>
                <p><strong>Important Note:</strong> You should only disable IE ESC in <strong>isolated test environments</strong>. In production servers, leaving it on helps reduce the attack surface on critical servers.</p>

                <p><strong>How:</strong>
                    <ol>
                        <li>In <span className="inline-code">Server Manager</span>, click <span className="inline-code">Local Server</span></li>
                        <li>Click <span className="inline-code">IE Enhanced Security Configuration</span> on the right</li>
                        <li>Set <span className="inline-code">Administrators</span> to <span className="inline-code">OK</span></li>
                    </ol>
                    <div className="image-container">
                        <img src="/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/9_disable_IE_ESC.png" alt="Blog Image" className="project-images"></img>
                    </div>
                </p>


                <h2 className="section-header">3 <span className="section-title">Installing Windows 10</span></h2>
                <h3 className="section-header">3.1 <span className="section-title">Creating the Windows 10 VM</span></h3>
                <p>Following the same steps as creating the Server VM, download the&nbsp;
                    <a href="https://www.microsoft.com/en-us/software-download/windows10" target="_blank" rel="noopener noreferrer">
                        Windows 10 ISO
                    </a>
                    &nbsp;and save it to  <span className="inline-code">D:\ISOs</span> in your USB drive. Then, in VirtualBox, press “New” to create a new virtual machine and follow my specifications as shown below.
                </p>

                <p>Recommended Specs:
                    <ul>
                        <li>2-4 GB RAM</li>
                        <li>1-2 CPUs</li>
                        <li>25-30 GB storage, dynamically allocated</li>
                    </ul>
                </p>

                <ImageCarousel carouselImages={CreatingWindows10VMImages} captions={CreatingWindows10VMCaptions} />
                <h3 className="section-header">3.2 <span className="section-title">Why These Settings?</span></h3>
                <ul>
                    <li>
                        <strong>Hostname</strong> = <span className="inline-code">Client01</span>
                        <br></br><span>To clearly indicate that this is a client machine in our lab domain. With accurate naming, it becomes less confusing in Active Directory, DNS, remote management tools, and event logs, especially as more servers are added.</span>
                    </li>
                    <li>
                        <strong>Domain Name</strong> = <span className="inline-code">lab.local</span>
                        <br></br><span>To mark the environment as private and for testing purposes. The <span className="inline-code">.local</span> extension avoids conflicts with real internet domains (like google.com) and doesn’t require purchasing a domain name or configuring SSL certificates.</span>
                        <span className="note">Here, we are only setting a label for the VM, not the actual domain name.</span>
                    </li>
                    <li>
                        <strong>Product Key</strong> = <span className="inline-code">(leave blank)</span>
                        <br></br><span>Because it is not needed for activation for short-term labs. All functionality we need is included.</span>
                        <span className="inline-note">&nbsp;(Join a domain, Use MMC tools (Group Policy, Users & Computers, etc.), Simulate AD environments)</span>
                    </li>
                </ul>

                <h3 className="section-header">3.3 <span className="section-title">Fixing Potential Product Key Issue</span></h3>
                <p>When we used VirtualBox’s guided install mode, it attached an unattended answer file by default (under <span className="inline-code">Controller: Floppy</span>) that can trigger product key errors during installation because we left the product key blank. To fix this:
                    <ol>
                        <li>Close the VM</li>
                        <li>Go to <span className="inline-code">Settings</span> → <span className="inline-code">Storage</span></li>
                        <li>Select and remove the <span className="inline-code">Unattended-[ID]</span> Floppy</li>
                        <li>Confirm that the Windows 10 ISO is still attached under <span className="Controller: SATA"></span></li>
                        <li>Click <span className="inline-code">OK</span> to save and open the VM to proceed with the manual install</li>
                    </ol>
                    <ImageCarousel carouselImages={FixingProductKeyIssueImages} captions={FixingProductKeyIssueCaptions} />
                </p>

                <h3 className="section-header">3.4 <span className="section-title">Windows 10 Installation Process</span></h3>
                <p>From here we can Install Windows 10 onto our second VM. This Windows 10 VM will act as the first client in our lab, and will be joined to the <span className="inline-code">lab.local</span> Active Directory domain hosted on our Server VM.</p>
                <p>The installation process is fairly straightforward: &nbsp;
                    <ol>
                        <li>When the Windows Setup wizard opens, continue with default language configuration and click <span className="inline-code">Next</span>, and then click <span className="inline-code">Install Now</span>.</li>
                        <li>When prompted to Activate Windows with a product key, just click <span className="inline-code">I don’t have a product key</span>. <span className="inline-note">You will install Windows 10 in unactivated mode, which is fine for a lab environment.</span></li>
                        <li>In the "<span className="inline-code">Select Operating System</span>" screen, select <span className="inline-code">Windows 10 Pro</span> and click <span className="inline-code">Next</span>.
                            <br></br>
                            <span className="inline-note">
                                <strong>Why?</strong>
                                <ul>
                                    <li>Windows 10 Pro contains core domain features that we’d want in a small lab such as:
                                        <ul>
                                            <li>Join an Active Directory domain</li>
                                            <li>Using Grouo Policy</li>
                                            <li>Running MMC tools (Microsoft Management Console)</li>
                                            <li>Remote management</li>
                                        </ul>
                                    </li>
                                    <li>In another, more complicated lab, we may want to select Enterprise, but for now, Pro offers us plenty of functionality.</li>
                                </ul>
                            </span>
                        </li>
                        <li>Accept the License Terms and click <span className="inline-code">Next</span>.</li>
                        <li>When prompted which type of installation we want, click <span className="inline-code">Custom</span> to ensure we get a clean install of Windows 10.</li>
                        <li>Select the empty partition you created and click <span className="inline-code">Next</span> to install</li>
                    </ol>
                    <ImageCarousel carouselImages={Windows10InstallationImages} captions={Windows10InstallationCaptions} />
                </p>
                <p>After installation, proceed with setup steps and skip internet connection since we are on <span className="inline-code">Internal Network</span> mode. For this lab, I set my client's username to "Client01" with all security question answers being "dog" for example simplicity.</p>

                <h2 className="section-header">4 <span className="section-title">Connecting Both VMs to the Same Internal Network</span></h2>
                <p>After creating each VM, we need to make sure they are both on the same network so they can “see” each other and communicate. In our case, we will use an internal network so they don’t touch the real internet.</p>
                <p>Follow these steps:
                    <br></br>
                    <ol>
                        <li>Stup down the VM if it's running.</li>
                        <li>In VirtualBox, select your VM from the left panel.</li>
                        <li>Click <span className="inline-code">Settings</span> and go to the <span className="inline-code">Network</span> tab.</li>
                        <li>Under Adapter 1:
                            <br></br>
                            <ul>
                                <li>Check "<span className="inline-code">Enable Network Adapter</span>"</li>
                                <li><span className="inline-code">Attached to:</span> <span className="inline-code">Internal Network</span></li>
                                <li><span className="inline-code">Name:</span> <span className="inline-code">LabNetwork</span> <span className="inline-note">(can be anything as long as they match accross both VM's)</span></li>
                                <li><span className="inline-note">(Optional but helpful)</span> In the VM's <span className="inline-code">Network settings</span>, go to <span className="inline-code">Advanced</span> → <span className="inline-code">Adapter Type</span> and choose <span className="inline-code">Intel PRO/1000 MT Desktop (82540EM)</span> if it's not already set. <span className="inline-note">This adapter is widely compatible with Windows VMs and helps avoid issues where the VM can't detect the network or obtain an IP address.</span></li>
                                <li>Click <span className="OK"> to save and repeat for each VM.</span></li>
                            </ul>
                        </li>
                    </ol>
                    <ImageCarousel carouselImages={connectingInternalNetworkImages} captions={connectingInternalNetworkCaptions} />
                </p>

                <h2 className="section-header">5 <span className="section-title">Promoting Windows Server to Domain Controller</span></h2>
                <p>Finally, we are ready to promote our <span className="inline-code">Windows Server</span> to <span className="inline-code">Domain Controller (DC)</span> through the <span className="inline-code">Active Directory Domain Services (AD DS) role</span>. This means that the server will become the central authority for managing the domain, which includes handling user authentication, enforcing security policies, and maintaining the directory of users, computers, and other resources.</p>
                <p><strong>TLDR</strong>: Once promoted, this server will control access tot the domain and allow us to create and manage accounts, groups, and permissions across the network.</p>

                <h3 className="section-header">5.1 <span className="section-title">Active Directory Domain Services (AD DS) Role Installation</span></h3>
                <p>Follow these steps:
                    <br></br>
                    <ol>
                        <li>Open <span className="inline-code">Server Manager</span>.</li>
                        <li>Within Dashboard, click <span className="inline-code">Add Roles and Features</span>.</li>
                        <li>Confirm you have completed <span className="inline-code">Before you begin</span> instructions.</li>
                        <li>In the <span className="inline-code">Installation Type</span> screen, select <span className="inline-code">Role-based or feature-based installation</span>.
                            <span className="note">This is the standard choice when installing most Windows server rles such as:
                                <ul>
                                    <li>Active Directory Domain Services (AD DS)</li>
                                    <li>DNS Server</li>
                                    <li>File Services</li>
                                </ul>
                            </span>
                        </li>
                        <li>In the "<span className="inline-code">Server Selection</span>" screen, select <span className="inline-code">Select a server from the server pool</span> and choose the Windows server we created. Ensure it matches the name and static IP we assigned <span className="inline-note">(DC1 and 192.168.56.10)</span>.</li>
                        <li>In the "<span className="inline-code">Server Roles</span>" screen, select the <span className="inline-code">Active Directory Domain Services</span> box, press <span className="inline-code">Add Features</span>, and <span className="inline-code">Next</span>.</li>
                        <li>In the "<span className="inline-code">Features</span>" screen, just click <span className="inline-code">Next</span>.
                            <span className="note">The necessary features for AD DS were already selected when we add that role.</span>
                        </li>
                        <li>In the "<span className="inline-code">AD DS</span>" screen, review the information and click <span className="inline-code">Next</span>.</li>
                        <span className="note">Notice that a DNS server will automatically be installed. Remember how we set the DNS to the loopback address when assigning a static IP address to the server? That tells the server that once this DNS server is installed, to use itself as the DNS resolver.</span>
                        <li>In the "<span className="inline-note">Confirmation</span>" page, select the "<span className="inline-code">Restart the destination server automatically if required</span>" box and press <span className="inline-code">Install</span>.</li>
                    </ol>
                    <ImageCarousel carouselImages={ADDSRoleInstallationImages} captions={ADDSRoleInstallationCaptions} />
                </p>

                <h3 className="section-header">5.2 <span className="section-title">Upgrading Windows Server to Domain Controller</span></h3>
                <p>
                    <ol>
                        <li>After installation, you should see a <span className="inline-code">yellow triangle warning</span> in the Server Manager dashboard's notification. Click it and select <span className="inline-code">Promote this server to a domain conroller</span>.</li>
                        <li>In the "<span className="inline-code">Deployment Configuration</span>" page, select <span className="inline-code">Add a new forest</span> and set <span className="inline-code">Root domain name</span> to "<span className="inlnie-code">lab.local</span>" (or any name), then click <span className="inlnie-code">Next</span>.</li>
                        <span className="note">
                            <ul>
                                <li>A forest in Active Directory is a top-level structure that contains one or more domains and the foundation for the entire Active Directory Environment.</li>
                                <li><strong>Tip</strong>: If you remember, when creating the VMs, we set “Domain Name” to lab.local. That was just a metadata label. Here, we are actually creating the domain in Active Directory. Keep these consistent to prevent confusion as best practice.</li>
                            </ul>
                        </span>
                        <li>In the "<span className="inline-code">Domain Controller Options</span>" screen, confirm the following options are selected:
                            <ul>
                                <li><strong>Forest/Domain functional level</strong>: ✅checked
                                    <span className="note">My default server selected is Windows Server 2016, which supports most modern AD features.</span>
                                </li>
                                <li><strong>Domain Name System (DNS) Server</strong>: ✅checked</li>
                                <li><strong>Global Catalog (GC)</strong>: ✅checked</li>
                                <li><strong>Read-only Domain Controller (RODC)</strong>: ❌unchecked</li>
                                <span className="note">We want a writable DC so we can create and manage users, computers, and groups in Active Directory.</span>
                                <li><strong>Password</strong>: Any strong password (I chose P@ssw0rd)</li>
                                <span className="note">Rarely needed, but used for recovery scenarios.</span>
                            </ul>
                        </li>
                        <li>In the "<span className="inline-code">DNS Options</span>" page, just click <span className="inline-code">Next</span>.
                            <span className="note">You will see a warning about DNS delegation. This is expected and safe to ignore because we are creating a new domain from scratch and there is no parent DNS zone to delegate from.</span>
                        </li>
                        <li>In the "<span className="inline-code">Additional Options</span>" page, the NetBIOS domain name should be autofilled to "LAB" based on our domain name (lab.local). Leave as is and click <span className="inline-code">Next</span>.
                            <span className="note">This name is used for backwards compatibility with older systems and doesn’t need to match the full domain name exactly.</span>
                        </li>
                        <li>In the "<span className="inline-code">Paths</span>" page, leave all paths as default and click <span className="inline-code">Next</span>.
                            <span className="note">Advanced setups may redirect these folders to different drives for performance/redundancy, but that's unnecessary for our basic lab environment.</span>
                        </li>
                        <li>In the "<span className="inline-code">Review Options</span>" page, review the configuration, then click <span className="inline-code">Next</span>.</li>
                        <li>In the "<span className="inline-code">Prerequisite Check</span>" page, you'll see a list of checks being performed. You may see warnings, but as long as there are <span className="highlight-red">no errors</span>, it's safe to proceed. Click <span className="inline-code">Install</span>.</li>
                        <li>If successful, the VM should restart after Active Directory Domaib Services is installed.</li>
                    </ol>
                    <ImageCarousel carouselImages={promoteServerToDCImages} captions={promoteServerToDCCaptions} />
                </p>
                <p>Now, the Windows server will officially function as a Domain Controller for our new domain.</p>

                <h2 className="section-header">6 <span className="section-title">Joining a Client to the Domain</span></h2>
                <h3 className="section-header">6.1 <span className="section-title">Windows 10 Client Configuration</span></h3>
                <p>Now that our Windows Server is a Domain Controller, we must take these important steps on our Windows 10 client VM to allow it to join the domain.</p>

                <h4 className="section-header">6.1.1 <span className="section-title">Rename the Computer</span></h4>
                <p><strong>Why:</strong> Technically, this isn't necessary, but it's best practice to set a clear, unique device name (like Client01). It helps with identification in Active Directory, DNS, logs, and remote management. Therefore ths step is highly recommended.</p>
                <p><strong>How:</strong>
                    <br></br>
                    <ol>
                        <li>In the Windows 10 client, open File Explorer and right-click <span className="inline-code">This PC</span> → <span className="inline-code">Properties</span>.</li>
                        <li>Click the <span className="inline-code">Rename this PC</span> button and name it to something useful. I chose Client01.</li>
                        <li>When prompted to, restart the PC.</li>
                    </ol>
                </p>

                <h4 className="section-header">6.1.2 <span className="section-title">Assign a Static IP Address</span></h4>
                <p><strong>Why:</strong> Domain controllers must have a fixed IP address so that clients can locate them reliably.  If the server used DHCP (as ours does by default), its address could change, breaking DNS records and client authentication.</p>
                <p><strong>How:</strong>
                    <ol>
                        <li>In the Windows 10 client, Open <span className="inline-code">Network Connections</span>.</li>
                        <li>Select <span className="inline-code">Internet Protocol Version 4 (TCIP/IPv4)</span> → <span className="inline-code">Properties</span></li>
                        <li>Choose <span className="inline-code">Use the following IP address</span>:
                            <ul>
                                <li><strong>IP Address:</strong> <span className="inline-code">192.168.56.20</span> <span className="inline-note">(or any unused IP in the same subnet as the server)</span></li>
                                <li><strong>Subnet Mask:</strong> <span className="inline-code">255.255.255.0</span> <span className="inline-note">(same subnet at Server)</span>
                                    <span className="note">We match the server’s subnet here so both devices know they’re on the same local network. This allows them to communicate directly without needing a router, which keeps things simple for our small lab environment.</span>
                                </li>
                                <li><strong>Default Gateway:</strong> (leave blank)
                                    <note>No need to connect to the internet since we are on a VirtualBox Internal Network.</note>
                                </li>
                            </ul>
                        </li>
                        <li>Choose <span className="inline-note">Use the following DNS server address</span>:
                            <ul>
                                <li><strong>Preferred DNS:</strong> <span className="inline-code">192.168.56.10</span> <span className="inline-note">(your Domain Controller's IP)</span>
                                    <span className="note">If the client doesn’t use the DC’s IP as its DNS server, the domain join will fail.</span>
                                </li>
                            </ul>
                        </li>
                        <li>Click <span className="inline-code">OK</span>, close everything, and proceed to verify network connectivity.</li>
                    </ol>
                </p>

                <h4 className="section-header">6.1.3 <span className="section-title">Verify Network Connectivity</span></h4>
                <p><strong>Why:</strong> It is essential to ensure that the step we took to connect both VM’s to the same Internal Network worked. Without network connection between client and DC, domain joining will fail.</p>
                <p><strong>How:</strong>
                    <ol>
                        <li>In the Windows 10 client, open <span className="inline-code">Command Prompt</span>.</li>
                        <li>Ensure the <span className="inline-code">Windows Server 2022</span> VM is also running.</li>
                        <li>In command prompt, try `<span className="inline-code">ping &lt;IP-of-your-Domain-Controller&gt;</span>`. If it fails, continue in this list.
                            <br></br>
                            <span className="note">
                                <ul>
                                    <li>In our case, use `<span className="inline-code">ping 192.168.56.10</span>`.</li>
                                    <li>The ping can fail for a number of reasons. My reason was I hadn’t done the previous steps. So, my Windows 10 VM did not get a valid IP from any DHCP server (Dynamic Host Configuration Protocol) assigned itself an APIPA (Automatic Private IP Addressing) address. In other words, the PC was assigned a private IP address which is outside of the Server’s `192.168.56.x` subnet and therefore it cannot communicate with the Server directly.</li>
                                </ul>
                            </span>
                        </li>
                    </ol>
                </p>
                <p>A correct ping ensuring communication will look like this:
                    <div className="image-container">
                        <img src="/images/Blog_Images/WinActiveDirectory/5_joining_domain/2_pinging_server_ip.png" alt="Blog Image" className="project-images"></img>
                    </div>
                </p>

                <h3 className="section-header">6.2 <span className="section-title">How to Join the Domain</span></h3>
                <p>At this point, you should have:
                    <ul>
                        <li>A Windows Server 2022 VM installed, configured, and promoted to Domain Controller</li>
                        <li>A configured Windows 10 VM to act as a client</li>
                        <li>Connected both virtual machines to the same internal network with confirmation</li>
                    </ul>
                </p>
                <p>So, we are finally ready to join our Windows client to the Domain we created by following these steps:
                    <ol>
                        <li>Verify that both Client and Server VMs are running.</li>
                        <li>In the Windows 10 client, open File Explorer and right-click <span className="inline-code">This PC</span> → <span className="inline-code">Properties</span>.</li>
                        <li>Click <span className="inline-code">Advanced system settings</span> on the right sidebar.</li>
                        <li>In the <span className="inline-code">System Properties</span> window, go to the <span className="inline-code">Computer Name</span> tab.</li>
                        <li>Click the <span className="inline-code">Change...</span> button near the bottom.</li>
                        <li>Under <span className="inline-code">Member of</span>, select <span className="inline-code">Domain</span>, then enter "<span className="inline-code">lab.local</span>" <span className="inline-note">(or whatever other domain name you chose to use for your lab when setting up the Active Directory domain)</span></li>
                        <li>Click <span className="inline-code">OK</span> and enter domain admin credentials when prompted. <span className="inline-note">(the credentials you created when upgrading the server to Domain Controller)</span></li>
                        <li>Restart the PC.</li>
                        <li>Confirm the domain was set properly by repeating steps 2 through 4. You should see "<span className="inline-code">Domain: lab.local</span>" (or your domain name).</li>
                    </ol>
                </p>

                <h2 className="section-header">7 <span className="section-title">Creating OUs, Groups, and Users in Active Directory</span></h2>
                <h3 className="section-header">7.1 <span className="section-title">Organizational Units</span></h3>

                <h4 className="section-header">7.1.1 <span className="section-title">What are OUs in Active Directory?</span></h4>
                <p>Organizational Units are a specific type of container inside Active Directory where you can store users, groups, and computers. They allow for structured administration, easier Group Policy Object (GPO) application, and to delegate administrative control to specific teams within a domain.</p>
                <p><span className="note"><strong>Example:</strong> In a real IT environment, you might create OUs created for each department (Sales, HR, Finance, etc) so you can easily apply policies and manage permissions.</span></p>
                <h4 className="section-header">7.1.2 <span className="section-title">How to Create OUs + Example</span></h4>
                <p>
                    <strong>Steps:</strong>
                    <ol>
                        <li>Log into the <span className="inline-code">Windows Server 2022 Domain Controller</span> using your domain admin account.</li>
                        <li>Open the <span className="inline-code">Active Directory Users and Computers</span> app through the search bar or <span className="inline-code">Window Key + S</span>.</li>
                        <li>In the left panel, expand your domain name ("lab.local" in our case).</li>
                        <li>Right-click your domain name and select <span className="inline-code">New</span> → <span className="inline-code">Organizational Unit</span>.</li>
                        <li>Enter the OU name ("IT", for example).</li>
                        <li>Repeat for any other OUs you want. For our lab example, create OUs for IT, HR, and Sales.</li>
                        <li>Confirm they appear under your domain tree in the <span className="inline-code">Active Directory Users and Computers</span> app.</li>
                    </ol>
                    <ImageCarousel carouselImages={creatingOUsImages} captions={creatingOUsCaptions} />
                </p>

                <h3 className="section-header">7.2 <span className="section-title">Groups</span></h3>
                <h4 className="section-header">7.2.1 <span className="section-title">What are Groups in Active Directory?</span></h4>
                <p>Groups in Active Directory are admin-defined collections used to organize users, computers, and other groups into logical units. They simplify access control and resource management. Before creating groups, here is some important information on group parameters.</p>
                <p><strong>Group Type:</strong>
                    <ul>
                        <li><strong>Security groups</strong> are used to assign permissions to resources like shared folders or printers.</li>
                        <li><strong>Distribution groups</strong> are for email lists (sending emails to a specific group of users).</li>
                    </ul>
                </p>

                <p><strong>Group Scope:</strong> Determines from which domains you can add users, computers, and other groups as members, and where in the AD environment you can assign permissions to this group.
                    <span className="note">Reminder: A forest is a top-level structure in an AD environment that contains all the domains and defines their relationships.</span>
                    <ul>
                        <li><strong><u>Global</u></strong> scope means you members can be added only <strong>from the same domain</strong>, but permissions apply in any domain in the forest (globally).
                            <span className="note">Typically used for departmental groups (HR_Access, IT_Admins, etc) that only contain members from a single domain.</span>
                        </li>
                        <li><strong><u>Domail Local</u></strong> scope means members can be added from any domain in the Active Directory forest (the whole AD environment), but permissions only apply in the domain the group is in (locally).</li>
                        <li><strong><u>Universal</u></strong> scope means members can be added from any domain in the Active Directory forest (the whole AD environment) and permissions apply in any domain in the forest (universally).</li>
                    </ul>
                </p>


                <h4 className="section-header">7.2.2 <span className="section-title">How to Create Groups + Example</span></h4>
                <p><strong>Steps:</strong>
                    <br></br>
                    For this example, we will create a security group called "<span>HR_Access</span>" and add all HR staff to it instead of assigning permissions to each user individually.
                    <ol>
                        <li>Log into the <span className="inline-code">Windows Server 2022 Domain Controller</span> using your domain admin account.</li>
                        <li>Open the <span className="inline-code">Active Directory Users and Computers</span> app and navigate to the OU where you want to place the group in. This only determines the storage location in AD’s hierarchy, choose wherever makes most logical sense for the scenario.
                            <span className="note">The OU a group is placed does <strong>not</strong> automatically determine who is in that group. Membership in a group is <strong>manually assigned</strong> or done programmatically and groups within one OU can have members from anywhere in the domain, even other departments.</span>
                        </li>
                        <li>Right-click the chosen OU and select <span className="inline-code">New</span> → <span className="inline-code">Group</span>.</li>
                        <li>Enter a group name (“HR_Access” for our lab example).</li>
                        <li>Set <span className="inline-code">Group Scope</span> to <span className="inline-code">Group</span>.
                            <span className="note">Because this is a departmental group with users from one domain only and needs these permissions no matter where they log in from (another office, remote access, SSO, etc).</span>
                        </li>
                        <li>Set <span className="inline-code">Group type</span> to <span className="inline-code">Security</span>.
                            <span className="note">Because this group will be used to assign permission to a shared folder in our hypothetical example.</span>
                        </li>
                        <li>Click <span className="inline-note">OK</span>.</li>
                    </ol>
                    <ImageCarousel carouselImages={creatingGroupsImages} captions={creatingGroupsCaptions} />
                </p>

                <h3 className="section-header">7.3 <span className="section-title">Users</span></h3>
                <h4 className="section-header">7.3.1 <span className="section-title">What are Users in Active Directory?</span></h4>
                <p>Users in Active Directory represent individual people or service accounts that log in to the domain. Each user has a username, password, and can be assigned permissions through group memberships.</p>

                <h4 className="section-header">7.3.2 <span className="section-title">How to Create Users + Example</span></h4>
                <p>
                    <strong>Example Scenario</strong>
                    <br></br>
                    You’ve just hired a new HR employee, John Doe. You’ll want to create their user account in the HR Organizational Unit (OU) and add them to the "<span className="inline-code">HR_Access</span>" group so they have the proper access rights.
                </p>
                <p><strong>Steps to Create a User:</strong>
                    <ol>
                        <li>Log into the <span className="inline-code">Windows Server 2022 Domain Controller</span> using your domain admin account.</li>
                        <li>Open the <span className="inline-code">Active Directory Users and Computers</span> app and navigate to the OU where you want to place the new user in (HR, for example).</li>
                        <li>Right-click the OU and select <span className="inline-code">New</span> → <span className="inline-code">User</span>.</li>
                        <li>Fill out the form with the mew user's example details:
                            <ul>
                                <li><strong>First name:</strong> John</li>
                                <li><strong>Last name:</strong> Doe</li>
                                <li><strong>User logon name:</strong> jdoe</li>
                            </ul>
                        </li>
                        <li>Click <span className="inline-code">Next</span>.</li>
                        <li>Set an initial password.
                            <br></br>
                            <span className="note">For this lab, you may want to uncheck <span className="inline-code">User must channge password at next logon</span> to keep things simple (but in real environments, keep it checked for security).</span>
                        </li>
                        <li>Click <span className="inline-code">Next</span> and then <span className="inline-code">Finish</span> to create the user account.</li>
                        <li>To assign permissions, right-click the new user, select <span className="inline-code">Add to a group</span>, type the group name (HR_Access) where prompted, and click <span className="inline-code">OK</span>.</li>
                    </ol>
                    <ImageCarousel carouselImages={creatingUsersImages} captions={creatingUsersCaptions} />
                </p>

                <h2 className="section-header">8 <span className="section-title">Applying Group Policies</span></h2>
                <h3 className="section-header">8.1 <span className="section-title">What is a Group Policy Object (GPO)?</span></h3>
                <p>A Group Policy Object (GPO) is a virtual collection of policy settings that control how computers behave within an Active Directory environment. GPOs allow administrators to centrally manage security settings, desktop configurations, software deployment, and much more.</p>

                <h3 className="section-header">8.2 <span className="section-title">Why Use GPOs?</span></h3>
                <p>Instead of manually configuring each computer or user account, GPOs let you enforce consistent policies across many machines, improving security and productivity.</p>

                <h3 className="section-header">8.3 <span className="section-title">Example Policies We Will Apply</span></h3>
                <ol>
                    <li>
                        <strong>Enforce Password Complexity</strong>
                        <ul>
                            <li>Ensures users create strong passwords that include uppercase, lowercase, numbers, and symbols.</li>
                            <li>Helps protect your domain from simple password attacks.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Configure Screensaver Timeout</strong>
                        <ul>
                            <li>Forces computers to lock after a set idle timer, reducing security risk from unattended machines.</li>
                        </ul>
                    </li>
                </ol>

                <h3 className="section-header">8.4 <span className="section-title">Steps to Create a GPO</span></h3>
                <p>
                    <ol>
                        <li>Log into the <span className="inline-code">Windows Server 2022 Domain Controller</span> using your domain admin account.</li>
                        <li>Open the <span className="inline-code">Group Policy Management</span> app.</li>
                        <li>On the left pane, expand your domain by expanding <span className="inline-code">Forest: lab.local</span> → <span className="inline-code">Domains</span> → <span className="inline-code">lab.local</span>.</li>
                        <li>Right-click <span className="inline-code">Group Policy Objects</span>, select <span className="inline-code">New</span>, and give your GPO a name (we'll use "Security Settings").</li>
                        <li>On the left pane, right-click the new GPO and click <span className="inline-code">Edit</span> to open the <span className="inline-code">Grroup Policy Management Editor</span>.</li>
                        <li>Navigate to the specific settings for your policies:
                            <ul>
                                <li>For password policies:
                                    <br></br>
                                    <span className="inline-code">Computer Configuration</span> → <span className="inline-code">Policies</span> → <span className="inline-code">Windows Settings</span> → <span className="inline-code">Security Settings</span> → <span className="inline-code">Account Policies</span> → <span className="inline-code">Password Policy</span>
                                </li>
                                <li>For screensaver timeout:
                                    <br></br>
                                    <span className="inline-code">User Configuration</span> → <span className="inline-code">Policies</span> → <span className="inline-code">Administrative Templates</span> → <span className="inline-code">Control Panel</span> → <span className="inline-code">Personalization</span>
                                </li>
                            </ul>
                        </li>
                        <li>Configure the settings you want, such as enabling password complexity or setting the screensaver timeout value by double-clicking the policy on the right side.</li>
                        <li>Close the editor.</li>
                    </ol>
                    <ImageCarousel carouselImages={creatingGPOsImages} captions={creatingGPOsCaptions} />
                </p>

                <h3 className="section-header">8.5 <span className="section-title">Steps to Link a GPO</span></h3>
                <p>
                    <ol>
                        <li>Log into the <span className="inline-code">Windows Server 2022 Domain Controller</span> using your domain admin account.</li>
                        <li>Open the <span className="inline-code">Group Policy Management</span> app.</li>
                        <li>Right-click the domain or OU and select <span className="inline-code">Link an Existing GPO</span>, then select your new GPO ("Security Settings" in our example).</li>
                        <li>Click <span className="inline-code">OK</span> to apply.</li>
                    </ol>
                    <ImageCarousel carouselImages={linkingGPOsImages} captions={linkingGPOsCaptions} />
                </p>

                <h1 className="section-header">III. <span className="section-title">Conclusion</span></h1>
                <h2 className="section-header">• <span className="section-title">What I Learned</span></h2>
                <p>From creating this guide from scratch, I gained solid foundational skills and knowledge in Active Directory. Hopefully, by following along, you have also gained the following skills & knowledge:
                    <br></br><br></br>
                    <strong>Virtualization & Lab Setup</strong>
                    <ul>
                        <li>VM setup, installation, and configuration in VirtualBox</li>
                        <li>Troubleshooting issues in VirtualBox</li>
                    </ul>

                    <strong>Windows Server & Active Directory</strong>
                    <ul>
                        <li>Installing and using Windows Server 2022</li>
                        <li>Active Directory basics (hostname, domain name, OUs, Groups, Users)</li>
                        <li>Promoting a server to a Domain Controller</li>
                        <li>Joining a client machine to the domain</li>
                        <li>Creating and applying Group Policy Objects (GPOs)</li>
                    </ul>

                    <strong>Networking Concepts</strong>
                    <ul>
                        <li>Assigning static IP addresses and why they’re important in managed networks</li>
                        <li>Understanding subnet masks</li>
                        <li>Using Remote Desktop for server management</li>
                    </ul>

                    <strong>Big Picture Takeaways</strong>
                    <ul>
                        <li>Why Active Directory networks are structured the way they are</li>
                        <li>The role of Domain Controllers in enterprise environments</li>
                    </ul>
                </p>

                <h2 className="section-header">• <span className="section-title">Next Steps</span></h2>
                <p>Building this Active Directory lab was a great foundation, but this is only a basic introduction. I plan on using this guide to help me learn more advanced topics in the future, such as:
                    <ul>
                        <li>Creating and applying more advanced Group Policy Objects (GPOs) for <strong>security hardening amd user restrictions.</strong></li>
                        <li>Use the domain environment as a <strong>sandbox for security tools</strong> (SIEM, vulnerability scanners, intrusion detection, etc)</li>
                        <li><strong>Simulate common attacks</strong> (like pass-the-hash or brute-force attempts) to see how they appear in logs</li>
                        <li>Explore <strong>Windows Event Viewer</strong> and set up centralized log collection for monitoring</li>
                        <li>Build a <strong>Kali Linux VM</strong> in the same network to practice penetration testing techniques safely</li>
                    </ul>
                </p>
            </div>
        </>
    );
}

export default WinActiveDirectoryBlog;