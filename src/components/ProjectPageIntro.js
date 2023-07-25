import "../stylesheets/ProjectPage.css"

export function ProjectPageIntro(props) {
    const { projectTitle, readTime, introText, projectType, techStack, codeLink, liveLink } = props;

    return (
        <div className="project-intro-container">
            <h1>{projectTitle}</h1>

            <div id="read-time">{readTime}</div>
            <p dangerouslySetInnerHTML={{ __html: introText }}></p>

            <div className="intro-project-details">
                <div>
                    <h3>Type</h3>
                    <div>{projectType}</div>
                </div>

                <div>
                    <h3>Stack</h3>
                    {techStack.map((skill) => (
                        <div key={skill}>{skill}</div>
                    ))}
                </div>

                {codeLink === "" ? null : (
                    <div>
                        <h3>Code</h3>
                        <a href={codeLink} target="blank">GitHub</a>
                    </div>
                )}


                {liveLink === "" ? null : (
                    <div>
                        <h3>Live</h3>
                        <a href={liveLink} target="blank">Site</a>
                    </div>
                )}

            </div>
        </div>
    );
}

export default ProjectPageIntro;