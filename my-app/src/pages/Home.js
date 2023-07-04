import '../stylesheets/Home.css'

export function Home() {
    //Ideas for background: 
    // 1. Fly in Text https://www.sliderrevolution.com/resources/css-animated-background/#:~:text=with%20moving%20clouds.-,Fly%20in%20Text%20on,CodePen%20Embed%20Fallback,-Created%20by%20Sydney
    // 2. 
    return (
        <>
            <div id="opening">
                <div>
                    <div id="tagline" className='opening-item'>
                        <span>Hi, I'm Steven | </span>
                        <span className='highlighted'>Software </span>
                        <span className='highlighted'>Engineer</span>
                    </div>
                </div>

                <div className="social-icons">
                    <a href="https://github.com/your-username" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/your-profile" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="mailto:your-email@example.com"><i className="fas fa-envelope"></i></a>
                </div>
                <p className="opening-description opening-item">An aspiring <b>Software Engineer</b> with a history in academic research recently graduated from San Francisco State University</p>
                <p id="opening-text" className='opening-item'>I’m a lifelong learner who’s always exploring new paths and hobbies. Some hobbies of mine are reading 📖, gardening 🌱, and playing darts 🎯</p>

            </div>
        </>
    );
}

export default Home;