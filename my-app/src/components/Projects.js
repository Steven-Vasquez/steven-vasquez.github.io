import "../stylesheets/Projects.css"


// IndividualProject component
function IndividualProject(props) {
    const { projectRole, projectTitle, techSkills, projectLink, projectDescription, projectImages } = props;

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
                <a tabIndex="0" href={projectLink}>View Project</a>
                <a tabIndex="1" href={projectLink}>View Project</a>
            </div>
            <p className="project-description">{projectDescription}</p>
            <div className="project-image-container">
                {projectImages.map((image) => (
                    <a href={projectLink}>
                        <img src={image} alt="Project Image" key={image} className="project-image" />
                    </a>
                ))}
            </div>
        </div>
    );
}

export function Projects() {
    const projectData = {
        projectRole: "LEAD BACKEND DEVELOPER",
        projectTitle: "ULingual",
        techSkills: ["JavaScript", "React", "NodeJS", "ExpressJS", "SQL", "AWS", "Twilio API"],
        projectDescription: "Served as backend lead in a team of 6 to create a language learning web app that connects native speakers to exchange language and culture. The site features ",
        projectLink: "https://example.com",
        projectImages: [
            "/images/Project_Images/ULingual/ULingual_screenshot_2.png",
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
                    <IndividualProject {...projectData} />

                </div>
            </div>
        </>
    );
}


export default Projects;