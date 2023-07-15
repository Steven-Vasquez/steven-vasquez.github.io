import ProjectPageIntro from "../../components/ProjectPageIntro";
import "../../stylesheets/ProjectPage.css"

export function ULingualPage() {
    const introDetails = {
        projectTitle: "ULingual",
        readTime: "1 minute read",
        introText: "Learning a new language is difficult, especially when you don't have anyone to practice with. ULingual is a <strong>language-learning web app</strong> that connects native speakers to exchange language and culture using <strong>video rooms created with React hooks and Twilio Video API</strong>.",
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
                <p>ULingual is the product created for my senior captsone software engineering at San Francisco State University, me and five teammates created a <strong>fake startup company</strong> and built a product following the <strong>complete software engineering process</strong>. After struggling to learn another language on my own, I wanted to create a product that helped.</p>
                <p>Learning a language is hard, and it's even harder to do so alone. With ULingual, learners are able to connect through <strong>forums and video calls</strong> with the purpose of exchanging language and building a supportive community. Additionally, study materials are provided such as <strong>flash cards and reccomended media</strong>.</p>

                <h1>Web Stack and Explanation</h1>
                <p>Built the project using React so we could become more familiar with it. We had very little React experience, but my team and I wanted to push ourselves to learn more from this project.</p>
                <p>The database was created <strong>using MySQL because it supports relational database design, met our required high performace</strong>, and we had experience with SQL.</p>
                <p>The backend was created using Express server running on a Node.js runtime. I created the video room service using the Twilio Video API and React hooks by routing and toggling participant audio tracks accordingly. Once Twilio access tokens are created, the video room and participant React components are generated and function as a live, password-protected video room with video and audio toggles.</p>

                <h1>Problems and Thought Process</h1>
                <p>Originally, ULingual was supposed to act as a language-learning platform with paid tutors and students as users. Because of a lack of available tutors and a need to deliver a product to our CTO (my professor), we pivoted to a community-focused learning platform where users can connect with each other. This led to redesigning large portions of our database to meet new funtional requirements.</p>
                <p>Since we were to treat this as a real product, we opted to using services such as AWS and Twilio to ensure ULingual would be <strong>scalable and flexible</strong>.</p>


            </div>
        </>
    );
}

export default ULingualPage;