import '../stylesheets/Opening.css'

export function Opening() {
    //Ideas for background: 
    // 1. Fly in Text https://www.sliderrevolution.com/resources/css-animated-background/#:~:text=with%20moving%20clouds.-,Fly%20in%20Text%20on,CodePen%20Embed%20Fallback,-Created%20by%20Sydney
    // 2. 
    const resumeLink = process.env.REACT_APP_RESUME_LINK;
    return (
        <>
            <div id="opening">
                <div>
                    <div id="tagline" className='opening-item'>
                        <span>Hi, I'm Steven | </span>
                        <span className='highlighted-text'>Software </span>
                        <span>&nbsp;</span>
                        <span className='highlighted-text'>Engineer</span>
                    </div>
                </div>

                <div className='social-row'>
                    <div className="social-icons social-icons-small">
                        <a href="https://github.com/Steven-Vasquez" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/steven-vasquez/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:stevenvasquez.pro@gmail.com"><i className="fas fa-envelope"></i></a>
                    </div>
                    <a href={resumeLink} target="_blank" class="resume-button">Resumé <i class="fas fa-external-link-alt social-icons"></i></a>
                </div>


                <p className="opening-description opening-item">A <b>Software Engineer</b> with a history in academic research graduated from San Francisco State University


                </p>
                <p className='opening-description opening-item'>I’m a lifelong learner who’s always exploring new paths and hobbies. Some hobbies of mine are reading 📖, gardening 🌱, and playing darts 🎯</p>

            </div>
        </>
    );
}

export default Opening;