import "../stylesheets/About.css"

export function About() {
    
    
    return (
        <div className="about-page-container">
            <h1>Under Construction</h1>
            <p>This page is currently under construction. Please check back later!</p>
        </div>
    )


    const resumeLink = process.env.REACT_APP_RESUME_LINK;

    /*
    return (
        <div className="about-page-container">
            <h1>Some headline</h1>
            <p><strong>Looking for my <a href={resumeLink}>Resume</a>?</strong></p>

            <h2>Short intro to me</h2>
            <p>I've always wanted a career in tech. Growing up, <strong>I wanted to be a physicist, an aerospace engineer, then finally, a software engineer</strong>. I discovered coding barely a semester before applying to college. I liked my AP Computer Science class so much that I had no choice but to major in CS.</p>
            <p>Since then, I've explored paths from <a href="https://dl.acm.org/doi/10.1145/3580592" target="blank">academic research</a> to working in a <a href ="/projects/ULingual">fake startup</a> company. After being accepted to the Genentech Foundation Scholars program at SF State, I had the freedom to explore research and grad school options during my undergrad. After <strong>working in a robotics/AI research lab for almost two years plus a summer REU internship experience</strong>, it's safe to say <strong>I'd rather be a software engineer</strong>, working on real products and new challenges every day.</p>
            
            <h2>Background</h2>
            <p>Throughout my undergraduate at San Francisco State University, I explored the academic route for computer science, focusing on research relating to robotics and machine learning. I was able to do so after I was accepted into the Genentech Foundation Scholars program to get funding for undergraduate research. </p>

            <h2>Professional Experience</h2>
            <p></p>

            <h2>Skills</h2>
            <p></p>

            <h2>Achievements</h2>
            <p></p>

            <h2>Interests and hobbies</h2>
            <p>my interests and hobbies are...</p>
        </div>
    );
    */
    
}

export default About;