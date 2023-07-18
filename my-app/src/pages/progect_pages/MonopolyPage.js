import ProjectPageIntro from "../../components/ProjectPageIntro";
import "../../stylesheets/ProjectPage.css"

export function MonopolyPage() {
    const introDetails = {
        projectTitle: "Monopoly",
        readTime: "2 minute read",
        introText: "If you've ever wanted to play Monopoly with friends online, this is the site to use! This project is a web application that is capible of <strong>hosting unlimited simultaneous</strong> virtual Monopoly games online. Features <strong>live game updates and chat functionality using Socket.io</strong>.",
        projectType: "Entertainment",
        techStack: ["JavaScript", "NodeJS", "ExpressJS", "PostgreSQL", "Socket.io", "Webpack"],
        codeLink: "https://github.com/csc-667-spring-2023-roberts/term-project-duclings",
        liveLink: "https://monopoly-a50j.onrender.com/",
    }

    return (
        <>
            <div className="project-page-container">
                <ProjectPageIntro {...introDetails} />
                
                <div className="image-container"> 
                    <img src = "/images/Project_Images/Monopoly/Monopoly_screenshot_1.png" alt="Project Image" className="project-images"></img>
                </div>

                <h1>Project Purpose and Goal</h1>
                <p>This Monopoly web app was my term project for my senior Internet Application Development course at San Francisco State University. But make no mistake, there was no hand-holding in this course. It was up to me and my three teammates to learn how to implement every aspect of this project. Class sessions could be thought of as Q&A sessions.</p>
                <p>My team and I had the opportunity to build a simpler game such as UNO, but <strong>we chose Monopoly knowing that it would challenge us</strong> by forcing us to gain a solid understanding of skills we would be using such as <strong>database desgin, API design, and WebSockets</strong>.</p>

                <h1>Web Stack and Explanation</h1>
                <p>Built the project using <strong>Javascript and EJS (Embedded JavaScript templates) with vanilla HTML/CSS for the frontend</strong>. Knowing that we had much to learn for backend technologies such as WebSockets, we wanted to keep our stack simple but functional.</p>
                <p>I designed our database visually using dbdiagram.io referencing Monopoly wiki pages and implemented the design using PostgreSQL. <strong>We opted for using PostgreSQL since hosting many simultaneous games would require many constant high speed read and write updates</strong>.</p>
                <div className="image-container" style={{marginBottom: "1.75rem"}}> 
                    <img src = "/images/Project_Images/Monopoly/Monopoly_dbdiagram.png" alt="Project Image" className="project-images" style={{maxHeight: "400px", border: "0px"}}></img>
                    <h4 style={{fontWeight: "425"}}>My database design visualized with dbdiagram.io</h4>
                </div>
                <p>The backend was created using Express server running on a Node.js runtime and project code is bundled with code linting using WebPack.</p>

                <h1>Problems and Thought Process</h1>
                <p>Since my teammates and I had no experience creating apps with live updates using WebSockets, we ran into many roadblocks of not knowing how to implement features that we wanted. For example, on one occasion, we fell a week behind our schedule because we were stuck on implementing a login feature with WebSockets and cookies.</p>
                <p>On top of this, we didn't finish our project for the class! <strong>We managed to implement our game API, database, user authentication, game creation, and live chat with WebSockets</strong>, but could not send live game updates. All of our preparations and design held up by one last roadblock.</p> 
                <p>It was disappointing to not present a completed project to the class. However, my team and I are <strong>in the process of revamping our Monopoly web app and rewriting it using tools such as React and TypeScript</strong>. We have a working database, API design, and UI mockup to build our newer, better app from scratch using the knowledge that we'd gained from working on this class project.</p>


            </div>
        </>
    );
}

export default MonopolyPage;