import "../stylesheets/ProjectPage.css"

export function PageIntro(props) {
    const { projectTitle, readTime, columnTitles, columnRowsInfo, linkColTitles, linkColLinks, linkTexts, introText } = props;

    const hasLinkColumns =
        linkColTitles &&
        linkColLinks &&
        linkTexts &&
        linkColTitles.length === linkColLinks.length &&
        linkColTitles.length === linkTexts.length;

    const toArray = (value) => (Array.isArray(value) ? value : [value]);

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

                {hasLinkColumns && (
                    linkColTitles.map((title, index) => (
                        <div key={index} className="intro-project-detail">
                            <h3>{title}</h3>
                            {toArray(linkColLinks[index]).map((link, linkIndex) => {
                                const text = toArray(linkTexts[index])[linkIndex];

                                if (!link || !text) {
                                    return null;
                                }

                                return (
                                    <div>
                                        <a key={linkIndex} href={link} target="_blank" rel="noopener noreferrer">
                                            {text}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    ))
                )}

            </div>
        </div>
    );
}

export default PageIntro;

/*
const introDetails = {
        projectTitle: "",
        readTime: "x minute read",
        columnTitles: ["Type📁", "Tools Used🛠️", "Skills Applied🧠"],
        columnRowsInfo: [
            [""],
            ["", "", "", ""],
            ["", "", "", ""]
        ],
        linkColTitles: [""],
        linkColLinks: [[""]],
        linkTexts: [["→"]],
        introText: [
            "",
        ],
    };
*/