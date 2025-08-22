import "../stylesheets/ProjectPage.css"

export function BlogPageIntro(props) {
    const { projectTitle, readTime, columnTitles, columnRowsInfo, introText, labSource, labLink } = props;

    return (
        <div className="project-intro-container">
            <h1>{projectTitle}</h1>

            <div id="read-time">{readTime}</div>

            {introText.map((text) => (
                <p key={text} dangerouslySetInnerHTML={{ __html: text }} ></p>
            ))}

            <div className="intro-project-details">
                {columnTitles.map((title, index) => (
                    <div key={index} className="intro-project-detail">
                        <h3>{title}</h3>
                        {columnRowsInfo[index].map((row, rowIndex) => (
                            <div key={rowIndex}>{row}</div>
                        ))}
                    </div>
                ))}

                {(labLink && labSource && labLink !== "" && labSource !== "") ? (
                <div>
                    <h3>Lab Source🌐</h3>
                    <a href={labLink} target="_blank" rel="noopener noreferrer">{labSource}</a>
                </div>
                ) : null}


            </div>
        </div>
    );
}

export default BlogPageIntro;