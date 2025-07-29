import "../stylesheets/ProjectPage.css"

export function BlogPageIntro(props) {
    const { projectTitle, readTime, introText, labType, tacticsUsed, toolsUsed, labSource, labLink } = props;

    return (
        <div className="project-intro-container">
            <h1>{projectTitle}</h1>

            <div id="read-time">{readTime}</div>
            
            {introText.map((text) => (
                <p key={text} dangerouslySetInnerHTML={{ __html: text }} ></p>
            ))}

            <div className="intro-project-details">
                <div>
                    <h3>Type📁</h3>
                    <div>{labType}</div>
                </div>

                <div>
                    <h3>Tactics Used🧠</h3>
                    {tacticsUsed.map((tactic) => (
                        <div key={tactic}>{tactic}</div>
                    ))}
                </div>

                <div>
                    <h3>Tools Used🛠️</h3>
                    {toolsUsed.map((skill) => (
                        <div key={skill}>{skill}</div>
                    ))}
                </div>

                <div>
                    <h3>Lab Source🌐</h3>
                    <a href={labLink} target="_blank" rel="noopener noreferrer">{labSource}</a>
                </div>

            </div>
        </div>
    );
}

export default BlogPageIntro;