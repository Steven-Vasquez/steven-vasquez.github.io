import ProjectPageIntro from "../../components/ProjectPageIntro";
import ImageCarousel from "../../components/ImageCarousel";
import "../../stylesheets/ProjectPage.css"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export function SubylertPage() {
    const introDetails = {
        projectTitle: "Subylert",
        readTime: "1.5 minute read",
        introText: "Ever had sneaky subscription fees that you forgot about? Subylert a mobile app meant to prevent that. <strong>By storing subscription information locally</strong> using Android's Room database, <strong>Subylert can send push and email notifications to users when a subscription is about to renew using Notivize API</strong>.",
        projectType: "Entertainment",
        techStack: ["Android Studio", "Java", "XML", "Firebase", "Room Database", "Notivize API"],
        codeLink: "",
        liveLink: "",
    }

    const carouselImages = ["/images/Project_Images/Subylert/Subylert_screenshot_1.png",
        "/images/Project_Images/Subylert/Subylert_screenshot_2.png",
        "/images/Project_Images/Subylert/Subylert_screenshot_3.png",]

    const carouselCaptions = ["blah", "blah2", "blah3"]

    return (
        <>
            <div className="project-page-container">
                <ProjectPageIntro {...introDetails} />

                
                <ImageCarousel carouselImages={carouselImages} captions={carouselCaptions} />

                {/*}
                <div className="image-container">
                    <img src="/images/Project_Images/Subylert/Subylert_screenshot_1.png" alt="Project Image" className="project-images"></img>
                </div>
                */}
                <h1>Project Purpose and Goal</h1>
                <p>Me and my team originally created this mobile app to compete in the <strong>Winter 2021 Code Day Hackathon</strong>. We created and submitted version one of the app and won the <strong>Best in Class App</strong> award at the hackathon. Moving forward, we knew we could do better, so we improved the app.</p>
                <p><a href="https://showcase.codeday.org/project/cklohluef13895811qffuyjne2t" target="_blank">Here</a> is our original hackathon submition, check it out!</p>

                <h1>Tech Stack and Explanation</h1>
                <p>Built the project in <strong>Android Studio using Java and XML</strong> after designing the user interface in Figma. We chose to <strong>store data locally utilizing Android's Room database</strong> since this was the simplest and most effective solution.</p>
                <p>Instead of managing accounts ourselves, we chose to use <strong>Firebase Authentication to implement a Google login service</strong> since the target audience is Android users.</p>
                <p>After saving subscription data, subscription payment notifications are scheduled using an asynchronous timer and <strong>users are later sent push and email notifications using the Notivize API.</strong></p>

                <h1>Problems and Thought Process</h1>
                <p>The main challenge in this project was a lack of experience in technologies that we were using. Only one team member had any experience with Android Studio, but he helped us to quickly get set up.</p>
                <p>After assessing eachother's strengths, I divided the team into pairs of two to focus on specific features and would check in regularly. As a team, we worked surprisingly well together considering we had never built anything with eachother before.</p>
                <p>The only issue was time, since we were competing in a Hackathon. Still, by the end, we had a presentable app and managed to win the Best in Class App award.</p>
            </div>
        </>
    );
}

export default SubylertPage;