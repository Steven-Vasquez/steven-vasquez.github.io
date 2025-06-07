import ProjectPageIntro from "../../components/ProjectPageIntro";
import ImageCarousel from "../../components/ImageCarousel";
import "../../stylesheets/ProjectPage.css"

export function CookingSitePage() {
    const introDetails = {
        projectTitle: "",
        readTime: "",
        introText: "",
        projectType: "Database Application/Web App",
        techStack: [],
        codeLink: "",
        liveLink: "",
    }

    const carouselImages = ["",]

    const carouselCaptions = ["",]

    const uiCarouselImages = [""]

    const uiCarouselCaptions = [""]

    return (
        <>
            <div className="project-page-container">
                <ProjectPageIntro {...introDetails} />

                <ImageCarousel carouselImages={carouselImages} captions={carouselCaptions} />

                <h1>Project Purpose and Goal</h1>
                <p></p>

                <h1>The Scenario</h1>
                <p></p>

                <h1>Some UI Screenshots</h1>
                <ImageCarousel carouselImages={uiCarouselImages} captions={uiCarouselCaptions} />
            </div>
        </>
    );
}

export default CookingSitePage;