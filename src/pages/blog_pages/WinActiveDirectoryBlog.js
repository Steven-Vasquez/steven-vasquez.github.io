import BlogPageIntro from "../../components/BlogPageIntro";
import ImageCarousel from "../../components/ImageCarousel";
import { Link as ScrollLink } from 'react-scroll';


import "../../stylesheets/ProjectPage.css"
import "../../stylesheets/Blog.css";

export function WinActiveDirectoryBlog() {
    const introDetails = {
        projectTitle: "Windows Active Directory Walkthrough [THIS PAGE IS ICOMPLETE, WIP]",
        readTime: "x minute read",
        introText: ["In this guide, I walk through building a simulated small-enterprise Windows network lab using multiple virtual machines. The lab environment includes a Windows Server 2022 machine configured as a Domain Controller and one or more Windows 10 client machines joined to the domain.",
            "This guide provides hands-on experience with core Windows administration tasks such as configuring Active Directory, creating and managing users, and applying group policies, the same tasks used in a real IT environment. Along the way, I try to explain key concepts and reasoning behind each step I chose, making this guide useful as a lab walkthrough and as a learning resource for myself and others."
        ],
        labType: "lab type",
        tacticsUsed: ["tactics used"],
        toolsUsed: ["Oracle VirtualBox"],
        labSource: "lab source",
        labLink: "lab link"
    };

    const CreatingTheServerVMImages = [
        "/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/1a_windows_server_setup.png",
        "/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/1b_windows_server_setup.png",
        "/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/1c_windows_server_setup.png",
        "/images/Blog_Images/WinActiveDirectory/1_server_VM_setup/1d_windows_server_setup.png"
    ]
    const CreatingTheServerVMCaptions = [
        "todo caption",
        "todo caption",
        "todo caption",
        "todo caption",
    ];

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
                                <li>Active Directory (AD)</li>
                                <li>Group Policy Objects (GPOs)</li>
                                <li>Network configuration</li>
                                <li>User management</li>
                            </ul>
                        </li>
                        <li>To create a reproduible testing environment for:
                            <ul>
                                <li>CyberSecurity practice</li>
                                <li>IT help desk training</li>
                                <ul>Advanced Windows administration tasks</ul>
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
                <p>To conserve space on my laptop’s internal drive, I used a <strong>256 GB USB 3.0 drive</strong> to store my virtual machines. Before setting up the lab, I formatted the drive using the <strong>NTFS file system</strong> with a <strong>4096-byte allocation unit size</strong> with the volume label: <span className="inline-code">VM_Lab</span></p>
                <div className="image-container">
                    <img src="/images/Blog_Images/WinActiveDirectory/0_formatting_USB/rufus_formatting.png" alt="Blog Image" className="project-images"></img>
                </div>
                <br></br>
                <p>I chose <strong>NTFS</strong> over exFAT because:
                    <ul>
                        <li>NTFS supports <strong>large VM disk files</strong> (over 4GB) with no issues</li>
                        <li>It providess <strong>better performance and stability</strong> for read/write-heavy workloads like virtual machines</li>
                        <li>It supports <strong>Windows file permissions</strong> and <strong>journaling</strong> (data protection feature which prevents data corruption during crashes or power loss), which are important when storing system-level files or snapshots</li>
                    </ul>
                </p>
                <p>Next, inside of the USB drive, create the folder structure:
                    TODO make file structure React component
                    <br></br>
                    <span className="file-structure">VM_Lab/
                        <br></br>├── ISOs/
                        <br></br>├── VMs/
                        <br></br>├── Scripts/
                    </span>
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
                <p>If you followed the above steps correctly to boot the Optical drive first before installation, <strong>SKIP this section.</strong> Otherwise, like me, you have installed the Server Core version of Windows Server 2022.</p>
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

                
                <h3 className="section-header">3.2 <span className="section-title">Why These Settings?</span></h3>
                <h3 className="section-header">3.3 <span className="section-title">Fixing Potential Product Key Issue</span></h3>
                <h2 className="section-header">4 <span className="section-title">Connecting Both VMs to the Same Internal Network</span></h2>
                <h2 className="section-header">5 <span className="section-title">Promoting Windows Server to Domain Controller</span></h2>
                <h3 className="section-header">5.1 <span className="section-title">Active Directory Domain Services (AD DS) Role Installation</span></h3>
                <h3 className="section-header">5.2 <span className="section-title">Upgrading Windows Server to Domain Controller</span></h3>
                <h2 className="section-header">6 <span className="section-title">Joining a Client to the Domain</span></h2>
                <h3 className="section-header">6.1 <span className="section-title">Windows 10 Client Configuration</span></h3>
                <h4 className="section-header">6.1.1 <span className="section-title">Rename the Computer</span></h4>
                <h4 className="section-header">6.1.2 <span className="section-title">Assign a Static IP Address</span></h4>
                <h4 className="section-header">6.1.3 <span className="section-title">Verify Network Connectivity</span></h4>
                <h3 className="section-header">6.2 <span className="section-title">How to Join the Domain</span></h3>
                <h2 className="section-header">7 <span className="section-title">Creating OUs, Groups, and Users in Active Directory</span></h2>
                <h3 className="section-header">7.1 <span className="section-title">Organizational Units</span></h3>
                <h4 className="section-header">7.1.1 <span className="section-title">What are OUs in Active Directory?</span></h4>
                <h4 className="section-header">7.1.2 <span className="section-title">How to Create OUs + Example</span></h4>
                <h3 className="section-header">7.2 <span className="section-title">Groups</span></h3>
                <h4 className="section-header">7.2.1 <span className="section-title">What are Groups in Active Directory?</span></h4>
                <h4 className="section-header">7.2.2 <span className="section-title">How to Create Groups + Example</span></h4>
                <h3 className="section-header">7.3 <span className="section-title">Users</span></h3>
                <h4 className="section-header">7.3.1 <span className="section-title">What are Users in Active Directory?</span></h4>
                <h4 className="section-header">7.3.2 <span className="section-title">How to Create Users + Example</span></h4>
                <h2 className="section-header">8 <span className="section-title">Applying Group Policies</span></h2>
                <h3 className="section-header">8.1 <span className="section-title">What is a Group Policy Object (GPO)?</span></h3>
                <h3 className="section-header">8.2 <span className="section-title">Why Use GPOs?</span></h3>
                <h3 className="section-header">8.3 <span className="section-title">Example Policies We Will Apply</span></h3>
                <h3 className="section-header">8.4 <span className="section-title">Steps to Create a GPO</span></h3>
                <h3 className="section-header">8.5 <span className="section-title">Steps to Link a GPO</span></h3>

                <h1 className="section-header">III. <span className="section-title">Conclusion</span></h1>
                <h2 className="section-header">• <span className="section-title">What I Learned</span></h2>
                <h2 className="section-header">• <span className="section-title">Next Steps</span></h2>
            </div>
        </>
    );
}

export default WinActiveDirectoryBlog;