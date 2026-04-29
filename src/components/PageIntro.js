import "../stylesheets/ProjectPage.css"

export function PageIntro(props) {
    const { projectTitle, readTime, columnTitles, columnRowsInfo, linkColTitles, linkColLinks, linkTexts, introText } = props;

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

                {linkColTitles && linkColLinks && linkTexts && linkColTitles.length === linkColLinks.length && linkColTitles.length === linkTexts.length && (
                    linkColTitles.map((title, index) => (
                        <div key={index} className="intro-project-detail">
                            <h3>{title}</h3>
                            <a href={linkColLinks[index]} target="_blank" rel="noopener noreferrer">{linkTexts[index]}</a>
                        </div>
                    ))
                )}

            </div>
        </div>
    );
}

export default PageIntro;