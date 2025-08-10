import React from 'react';
import { Link } from 'react-router-dom';

import "../stylesheets/ProjectSection.css"


// IndividualProject component
function IndividualProject(props) {
    const { completionDate, projectTitle, categorySkills, techSkills, blogDescription, blogRoute, blogImages } = props;

    return (
        <div className="individual-project">
            <div className="project-role">{completionDate}</div>
            <h1 className="project-name">{projectTitle}</h1>
            <div className="project-skills-container">
                <ul className="skill-category">
                    {categorySkills.map((skill) => (
                        <li key={skill} className="skill-category-box">{skill}</li>
                    ))}
                </ul>
                <ul className="skills-used">
                    {techSkills.map((skill) => (
                        <li key={skill} className="skill-box">{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="project-button">
                <a tabIndex="0" href={blogRoute}>View Project</a>
                <a tabIndex="1" href={blogRoute}>View Project</a>
            </div>
            <p className="project-description" dangerouslySetInnerHTML={{ __html: blogDescription }}></p>

            <div className="project-image-container">
                {blogImages.map((image) => (
                    <a href={blogRoute} key={image} className="project-image-link">
                        <img src={image} alt="Project Image" className="project-image" />
                    </a>
                ))}
            </div>
        </div>
    );
}

export function Blog() {
    /*
   const projectData = {
       blogTitle: "",
       techSkills: "",
       projectLink: "",
       projectImages: [
           "",
       ],
       date: "2025-07-25"
   };
   */

    const WinActiveDirectoryBlog = {
        completionDate: "8/8/2025",
        projectTitle: "Windows AD Guide (name WIP)",
        categorySkills: ["todo", "todo"],
        techSkills: ["todo", "todo", "todo"],
        blogDescription: "todo",
        blogRoute: "/blog/windows-active-directory-lab",
        blogImages: [
            "",
        ]
    };

    const DanaBotBlog = {
        completionDate: "7/25/2025",
        projectTitle: "DanaBot",
        categorySkills: ["Network Forensics", "Security"],
        techSkills: ["Wireshark", "VirusTotal", "ANY.RUN", "Network Miner", "Kali Linux"],
        blogDescription: "Identified the <strong>infection vector</strong>, analyzed the <strong>network traffic</strong>, and extracted <strong>indicators of compromise</strong> (IOCs) from a packet capture (PCAP) file of a system compromised by DanaBot malware.",
        blogRoute: "/blog/DanaBot",
        blogImages: [
            "/images/Blog_Images/DanaBot/1_identifying_suspicious_DNS_server.png",
        ]
    };

    return (
        <>
            <div className="about-page-container">
                <h1>Under Construction</h1>
                {/*<p>TODO: add "top skills used" section with counts of each tag being used.</p>*/}
            </div>

            <div className="projects-section" id='Projects'>
                <div className="projects-header">
                    <h1 style={{ display: 'flex', flexDirection: 'row' }}>
                        <div className="highlight">
                            <div>Posts</div>
                            <div></div>
                        </div>
                    </h1>
                </div>

                <div className="projects">
                    <IndividualProject {...WinActiveDirectoryBlog} />
                    <IndividualProject {...DanaBotBlog} />
                </div>
            </div>
        </>



    )


    const resumeLink = process.env.REACT_APP_RESUME_LINK;
}

export default Blog;