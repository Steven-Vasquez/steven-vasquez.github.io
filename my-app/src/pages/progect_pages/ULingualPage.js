import ProjectPageIntro from "../../components/ProjectPageIntro";
import "../../stylesheets/ProjectPage.css"

export function ULingualPage() {
    const introDetails = {
        projectTitle: "ULingual",
        readTime: "1 minute read",
        introText: "Learning a new language is difficult, especially when you don't have anyone to practice with. ULingual is a language learning web app that connects native speakers to exchange language and culture using the Twilio Video API.",
        projectType: "Education",
        techStack: ["JavaScript", "React", "NodeJS", "ExpressJS", "SQL", "AWS", "Twilio Video API"],
        codeLink: "https://example.com",
        liveLink: "https://example.com",
    }

    return (
        <>
            <div className="project-page-container">
                <ProjectPageIntro {...introDetails} />
                
                <div className="image-container"> 
                    <img src = "/images/Project_Images/ULingual/ULingual_screenshot_1.png" alt="Project Image" className="project-images"></img>
                </div>

                <h1>Project Purpose and Goal</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget velit. Gravida in fermentum et sollicitudin ac orci phasellus. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Tristique senectus et netus et malesuada.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam. Eget dolor morbi non arcu risus quis varius quam. Velit dignissim sodales ut eu sem integer. Enim facilisis gravida neque convallis a cras semper auctor.</p>

                <h1>Web Stack and Explanation</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus. Scelerisque eu ultrices vitae auctor eu augue ut. Urna condimentum mattis pellentesque id nibh. Quis varius quam quisque id diam vel quam elementum. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis.</p>

                <h1>Problems and Thought Process</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu non odio euismod. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Feugiat nibh sed pulvinar proin gravida hendrerit lectus.</p>



            </div>
        </>
    );
}

export default ULingualPage;