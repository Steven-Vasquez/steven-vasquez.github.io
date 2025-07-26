import BlogPageIntro from "../../components/BlogPageIntro";
import ImageCarousel from "../../components/ImageCarousel";
import "../../stylesheets/ProjectPage.css"

export function BlogTest() {
    const introDetails = {
        projectTitle: "DanaBot",
        readTime: "1 minute read",
        introText: "TODO: Write this",
        labType: "Network Analysis",
        tacticsUsed: ["Execution", "Command and Control"], 
        toolsUsed: ["Wireshark", "VirusTotal", "ANY.RUN", "Network Miner", "Kali Linux"],
        labSource: "CyberDefenders", 
        labLink: "https://cyberdefenders.org/blueteam-ctf-challenges/danabot/"
    }

    return (
        <>
            <div className="project-page-container">
                <BlogPageIntro {...introDetails} />

                <h1>What I set out to learn</h1>
                <p>Blah.. blah blah blah.. blah</p>

                <h1>What tools/labs I used</h1>
                <p>Blah.. blah blah blah.. blah</p>

                <h1>What I discovered</h1>
                <p>Blah.. blah blah blah.. blah</p>

                <h1>Why it matters in a real-world job</h1>
                <p>Blah.. blah blah blah.. blah</p>

                <h1>Next steps / what I’m still curious about</h1>
                <p>Blah.. blah blah blah.. blah</p>
            </div>
        </>
    )
}

export default BlogTest;