import "../stylesheets/Projects.css"

export function Projects() {
    return (
        <>
            <div className="projects-section">
                <div className="projects-header">
                    <h1 style={{ display: 'flex', flexDirection: 'row' }}>
                        <div>My</div>
                        <span>&nbsp;</span>
                        <div className="highlight">
                            <div>Projects</div>
                            <div></div>
                        </div>
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Projects;