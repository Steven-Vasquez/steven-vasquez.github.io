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
                    <a href={projectRoute} key={image} className="project-image-link">
                        <img src={image} alt="Project Image" className="project-image" />
                    </a>
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
        projectDescription: "Led backend development in a team of 6 to create a language learning web app that connects native speakers to exchange language and culture. Implemented the video chatroom service using the Twilio Video API and React hooks.",
        projectRoute: "/projects/ULingual",
        projectImages: [
            "/images/Project_Images/ULingual/ULingual_screenshot_homeSmall.png",
        ]
    };


    const MonopolyData = {
        projectRole: "TEAM LEAD",
        projectTitle: "Monopoly",
        techSkills: ["JavaScript", "PostgreSQL", "NodeJS", "ExpressJS", "Socket.io", "Webpack"],
        projectDescription: "Led a team of 4 to create a multiplayer Monopoly web app capible of hosting unlimited games with live updates and chat using WebSockets.",
        projectRoute: "/projects/Monopoly",
        projectImages: [
            "/images/Project_Images/Monopoly/Monopoly_screenshot_1.png",
        ]
    };

    const SubylertData = {
        projectRole: "HACKATHON TEAM LEAD",
        projectTitle: "Subylert",
        techSkills: ["Android Studio", "Java", "XML", "Firebase", "Room Database", "Notivize API"],
        projectDescription: "<strong>Hackathon winner!</strong> An Android submarine-themed subscription manager app that allows users to track their payment subscriptions and receive notifications when a subscription is about to renew.",
        projectRoute: "/projects/Subylert",
        projectImages: [
            "/images/Project_Images/Subylert/Subylert_screenshot_1.png",
        ]
    };

    const DealershipDatabaseData = {
        projectRole: "DEVELOPER",
        projectTitle: "Car Dealership Manager",
        techSkills: ["MySQL", "PHP", "Apache", "HTML/CSS"],
        projectDescription: "Worked in a team of 4 to create a <strong>web-based database application</strong> designed to help dealerships track vehicle inventory, customer purchases, and sales data efficiently <strong>utilizing a MySQL database</strong>.",
        projectRoute: "/projects/DealershipDatabase",
        projectImages: [
            "/images/Project_Images/DealershipDatabase/add_customer.png",
        ]
    };

    return (
        <>
            <div className="projects-section" id='Projects'>
                <div className="projects-header">
                    <h1 style={{ display: 'flex', flexDirection: 'row' }}>
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
                    <IndividualProject {...DealershipDatabaseData} />
                </div>
            </div>
        </>
    );
}


export default ProjectSection;