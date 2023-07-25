import ProjectPageIntro from "../../components/ProjectPageIntro";
import ImageCarousel from "../../components/ImageCarousel";
import "../../stylesheets/ProjectPage.css"


export function ULingualPage() {
    const introDetails = {
        projectTitle: "ULingual",
        readTime: "2.5 minute read",
        introText: "Learning a new language is difficult, especially when you don't have anyone to practice with. ULingual is a <strong>language-learning web app</strong> that connects native speakers to exchange language and culture using <strong>video rooms created with React hooks and Twilio Video API</strong>.",
        projectType: "Education",
        techStack: ["JavaScript", "React", "NodeJS", "ExpressJS", "MySQL", "AWS", "Twilio Video API"],
        codeLink: "https://github.com/Steven-Vasquez/ULingual",
        liveLink: "",
    }
    
    // Design/Mockup images carousel
    const mockupCarouselImages = ["/images/Project_Images/ULingual/mockups/ULingual_mockup_1.png",
        "/images/Project_Images/ULingual/mockups/ULingual_mockup_2.png",
        "/images/Project_Images/ULingual/mockups/ULingual_mockup_3.png",
        "/images/Project_Images/ULingual/mockups/ULingual_mockup_4.png",
        "/images/Project_Images/ULingual/mockups/ULingual_mockup_5.png",
        "/images/Project_Images/ULingual/mockups/ULingual_mockup_6.png",
        "/images/Project_Images/ULingual/mockups/ULingual_mockup_7.png",
    ]
    const mockupCarouselCaptions = ["Creating a ULingual Account",
        "Joining a Video Room",
        "Access Recommended Music Playlists",
        "Accessing Flashcards",
        "Creating a Forum",
        "Editing Your Profile",
        "Viewing a Friends Profile"]



    const databaseCarouselImages = ["/images/Project_Images/ULingual/database_images/ULingual_database_1.png",
        "/images/Project_Images/ULingual/database_images/ULingual_database_2.png",
        "/images/Project_Images/ULingual/database_images/ULingual_database_3.png",]
    const databaseCarouselCaptions = ["Entity-Relationship (ER) Diagram of database design",
        "Enhanced Entity-Relationship (EER) Diagram of database design",
        "UML Diagram of database design"
]

    return (
        <>
            <div className="project-page-container">
                <ProjectPageIntro {...introDetails} />

                <div className="image-container">
                    <img src="/images/Project_Images/ULingual/ULingual_screenshot_1.png" alt="Project Image" className="project-images"></img>
                </div>

                <h1>Project Purpose and Goal</h1>
                <p>ULingual is my senior captsone software engineering project at San Francisco State University where me and six teammates created a <strong>fake startup company</strong> and built a product following the <strong>complete software engineering process</strong>. After struggling to learn another language on my own, I wanted to create a product that helped.</p>
                <p>Learning a language is hard, and it's even harder to do so alone. With ULingual, learners are able to connect through <strong>forums and video calls</strong> with the purpose of exchanging language and building a supportive community. Additionally, study materials are provided such as <strong>flash cards and reccomended media</strong>.</p>

                <h1>Web Stack and Explanation</h1>
                <p>Built the project using React so we could become more familiar with the framework. We had very little React experience, but my team and I wanted to push ourselves to learn more from this project.</p>
                <p>The database was created <strong>using MySQL because it supports relational database design, met our required high performace</strong>, and we had experience with SQL.</p>
                <p>The backend was created using Express server running on a Node.js runtime. I created the video room service using the <strong>Twilio Video API and React hooks</strong> by routing and toggling participant audio/video tracks accordingly. Once Twilio access tokens are created, the video room and participant React components are generated and function as a live, <strong>password-protected</strong> video room with video and audio toggles.</p>

                <h1>Problems and Thought Process</h1>
                <p>Originally, ULingual was supposed to act as a language-learning platform with paid tutors and students as users. Because of a lack of available tutors and a need to deliver a product to our CTO (my professor), we pivoted to a community-focused learning platform where users can connect with each other. This led to redesigning large portions of our database to meet new funtional requirements.</p>
                <p>Since we were to treat this as a real product, we opted to using services such as AWS and Twilio to ensure ULingual would be <strong>scalable and flexible</strong>.</p>

                <h1>Design/Mockup Images</h1>
                <ImageCarousel carouselImages={mockupCarouselImages} captions={mockupCarouselCaptions} />

                <h1>Database Design</h1>
                <ImageCarousel carouselImages={databaseCarouselImages} captions={databaseCarouselCaptions} />
            </div>
        </>
    );
}

export default ULingualPage;