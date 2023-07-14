import React from 'react';
import { Link } from 'react-router-dom';

import "../stylesheets/ProjectSection.css"


// IndividualProject component
function IndividualProject(props) {
    const { projectRole, projectTitle, techSkills, projectRoute, projectDescription, projectImages } = props;

    return (
        <div className="individual-project">
            <div className="project-role">{projectRole}</div>
            <h1 className="project-name">{projectTitle}</h1>
            <ul className="skills-used">
                {techSkills.map((skill) => (
                    <li key={skill} className="skill-box">{skill}</li>
                ))}
            </ul>
            <div className="project-button">
                <a tabIndex="0" href={projectRoute}>View Project</a>
                <a tabIndex="1" href={projectRoute}>View Project</a>
            </div>
            <p className="project-description" dangerouslySetInnerHTML={{ __html: projectDescription }}></p>

            <div className="project-image-container">
                {projectImages.map((image) => (
                    <Link to={projectRoute}>
                        <img src={image} alt="Project Image" key={image} className="project-image" />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export function ProjectSection() {
    /*
    const projectData = {
        projectRole: "",
        projectTitle: "",
        techSkills: [],
        projectDescription: "",
        projectLink: "",
        projectImages: [
            "",
        ]
    };
    */

    const ULingualData = {
        projectRole: "LEAD BACKEND DEVELOPER",
        projectTitle: "ULingual",
        techSkills: ["JavaScript", "React", "NodeJS", "ExpressJS", "MySQL", "AWS", "Twilio Video API"],
        projectDescription: "Led backend development in a team of 6 to create a language learning web app that connects native speakers to exchange language and culture. Implemented the video chatroom service using the Twilio Video API.",
        projectRoute: "/projects/ULingual",
        projectImages: [
            "/images/Project_Images/ULingual/ULingual_screenshot_homeSmall.png",
        ]
    };

    
    const MonopolyData = {
        projectRole: "TEAM LEAD",
        projectTitle: "Monopoly",
        techSkills: ["JavaScript", "PostgreSQL", "NodeJS", "ExpressJS", "Socket.io", "Webpack"],
        projectDescription: "Led a team of 4 to create a multiplayer Monopoly game using Socket.io. ",
        projectRoute: "https://example.com",
        projectImages: [
            "/images/Project_Images/Monopoly/Monopoly_screenshot_1.png",
        ]
    };
    
    const SubylertData = {
        projectRole: "HACKATHON TEAM LEAD",
        projectTitle: "Subylert",
        techSkills: ["Android Studio", "Java", "Firebase", "Room Database", "Notivize API"],
        projectDescription: "<strong>Hackathon winner!</strong> A subscription manager app",
        projectLink: "https://example.com",
        projectImages: [
            "/images/Project_Images/Subylert/Subylert_screenshot_1.png",
        ]
    };

    return (
        <>
            <div className="projects-section">
                <div className="projects-header">
                    <h1 style={{ display: 'flex', flexDirection: 'row'}}>
                        <div className="highlight">
                            <div>Projects</div>
                            <div></div>
                        </div>
                    </h1>
                </div>

                <div className="projects">
                    <IndividualProject {...ULingualData} />
                    <IndividualProject {...MonopolyData} />
                    <IndividualProject {...SubylertData} />
                </div>
            </div>
        </>
    );
}


export default ProjectSection;