import BlogPageIntro from "../../components/BlogPageIntro";
import ImageCarousel from "../../components/ImageCarousel";
import "../../stylesheets/ProjectPage.css"
import "../../stylesheets/Blog.css";


export function TestPage() {
    
    const introDetails = {
        projectTitle: "This is a testing ground",
        readTime: "x minute read",
        introText: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        labType: "lab type",
        tacticsUsed: ["tactics used"],
        toolsUsed: ["tools used"],
        labSource: "lab source",
        labLink: "lab link"
    };
    
    return (
        <>
            <div className="project-page-container">
                <BlogPageIntro {...introDetails} />
                <p>Normal text followed by <span className="inline-note">An inline note</span></p>
                <p>Click the <span class="inline-code">Next</span> button</p>
                <p>Important terms?<span class="text-snippet">lab.local</span></p>
                <br></br>
                <p>This is&nbsp;
                    <span className="highlight-yellow">highlighted text</span>
                </p>
                <br></br>
                <p>This is&nbsp;
                    <span className="highlight-green">highlighted text</span> for important terms and phrases
                </p>
                <br></br>
                <p>This is&nbsp;
                    <span className="highlight-red">highlighted text</span> for errors or critical information
                </p>
                <br></br>
                <p class="note">Note: this is a note</p>
                <br></br>
                <p className="inline-note">This is an inline note</p>


                The <a href="#glossary-loopback" class="term">loopback address</a> is important.
                ...
                <h2 id="glossary">Glossary</h2>
                <dl>
                    <dt id="glossary-loopback">Loopback Address</dt>
                    <dd>A special IP address (127.0.0.1) used by a computer to refer to itself.</dd>
                </dl>


                <br></br><br></br>
                <h1>h1 Header</h1>
                <h2>h2 Header</h2>
                <h3>h3 Header</h3>
                <h4>h4 Header</h4>

                <br></br><br></br>
                <ol>
                    <li>First item in ordered list</li>
                    <li>Second item in ordered list</li>
                    <li>Third item in ordered list</li>
                </ol>

                <ul>
                    <li>First item in unordered list</li>
                    <li>Second item in unordered list</li>
                    <li>Third item in unordered list</li>
                </ul>


            </div>
        </>
    );
}

export default TestPage;
        