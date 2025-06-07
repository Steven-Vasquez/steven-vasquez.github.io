import ProjectPageIntro from "../../components/ProjectPageIntro";
import ImageCarousel from "../../components/ImageCarousel";
import "../../stylesheets/ProjectPage.css"

export function MonopolyPage() {
    const introDetails = {
        projectTitle: "Car Dealership Management Database",
        readTime: "1 minute read",
        introText: "<strong>Managing a car dealership's inventory and sales just got easier.</strong> This project is a web-based database application designed to help dealerships track vehicle inventory, customer purchases, and sales data efficiently <strong>utilizing a MySQL database</strong>. ",
        projectType: "Database Application",
        techStack: ["MySQL", "PHP", "Apache", "HTML/CSS"],
        codeLink: "https://github.com/Steven-Vasquez/car-dealership-database",
        liveLink: "",
    }

    const carouselImages = ["/images/Project_Images/DealershipDatabase/add_customer.png",
        "/images/Project_Images/DealershipDatabase/EER_diagram.png",
        "/images/Project_Images/DealershipDatabase/eer2rel_diagram.png",]

    const carouselCaptions = ["Example of website UI for adding a customer to the database",
        "Extended Entity Relationship (EER) diagram of database design",
        "EER to relattional mapping diagram",]

    const uiCarouselImages = ["/images/Project_Images/DealershipDatabase/add_customer.png",
        "/images/Project_Images/DealershipDatabase/add_vehicle.png",
        "/images/Project_Images/DealershipDatabase/add_vendor.png",
        "/images/Project_Images/DealershipDatabase/advanced_search_vehicles.png",
        "/images/Project_Images/DealershipDatabase/search_vehicles.png",
        "/images/Project_Images/DealershipDatabase/login.png",
        "/images/Project_Images/DealershipDatabase/sell_vehicle.png"]

    const uiCarouselCaptions = ["Example of website UI for adding a customer to the database",
        "Example of website UI for adding a vehicle to the database",
        "Example of website UI for adding a vendor to the database",
        "Example of website UI for advanced vehicle search",
        "Example of website UI for basic vehicle search",
        "Example of website UI for logging in to the database",
        "Example of website UI for selling a vehicle"]

    return (
        <>
            <div className="project-page-container">
                <ProjectPageIntro {...introDetails} />

                <ImageCarousel carouselImages={carouselImages} captions={carouselCaptions} />

                <h1>Project Purpose and Goal</h1>
                <p>This is my semester-long project for my <strong>Graduate Database Systems Concepts and Design</strong> course at Georgia Tech where I learned all the database concepts, techniques, and
                    tools that are needed to <strong>develop a database application from scratch</strong>.</p>
                <p>As you may be able to tell, visuals were NOT my priority. My goal was to iteratively <strong>design a database for a real-world scenario</strong> using procedures and standards that I was being taught such as Extended Entity Relationship Models (EER), the
                    Relational Model, Relational algebra, SQL, database normalization, efficiency and indexing.</p>

                <h1>The Scenario</h1>
                <p>To keep this short, I was tasked with designing/building <strong>a secure car dealership database for a Georgia Tech alumni</strong> that featured 4 types of employees with separate permissions, vehicle transaction records, customer records, business/customer records, as well as part order/vendor records.</p>
                <p>My database design was held to <strong>rigorous standards</strong> and to be implemented using MySQL and PHP, and the database was to be hosted on an Apache server. The database was to be accessed through a <strong>web interface</strong> that was designed using HTML and CSS.</p>

                <h1>Some UI Screenshots</h1>
                <ImageCarousel carouselImages={uiCarouselImages} captions={uiCarouselCaptions} />
            </div>
        </>
    );
}

export default MonopolyPage;