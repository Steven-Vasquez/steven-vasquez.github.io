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
            <div className="page-container">
                <ProjectPageIntro {...introDetails} />
                <div className="image-container"> 
                    <img src = "/images/Project_Images/ULingual/ULingual_screenshot_1.png" alt="Project Image" className="project-images"></img>
                </div>
            </div>
        </>
    );
}

export default ULingualPage;