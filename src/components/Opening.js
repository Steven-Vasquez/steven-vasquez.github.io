import '../stylesheets/Opening.css'

export function Opening() {
    //Ideas for background: 
    // 1. Fly in Text https://www.sliderrevolution.com/resources/css-animated-background/#:~:text=with%20moving%20clouds.-,Fly%20in%20Text%20on,CodePen%20Embed%20Fallback,-Created%20by%20Sydney
    // 2. 
    const resumeLink = "https://drive.google.com/file/d/1S83sn9GXitC_tcwY0-4ZQimFwDWAkUtt/view?usp=sharing";
    return (
        <>
            <div id="opening">
                <div>
                    <div id="tagline" className='opening-item'>
                        <span>Hi, I'm Steven | </span>
                        <span className='highlighted-text' id='top-highlighted-text'>Developer,</span>
                        <span>&nbsp;</span>
                        <span className='highlighted-text'>Cybersecurity M.S. Student</span>
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

                <p className='opening-description opening-item'>I’m an <b>M.S. Cybersecurity student at Georgia Tech</b>, building on a strong foundation in full-stack development. My experience includes building <b>web apps</b>, designing <b>relational databases</b>, and deploying to <b>cloud infrastructure</b>. </p>
                
                <p className='opening-description opening-item'>I’m a lifelong learner who’s always exploring new paths and hobbies. Some hobbies of mine are reading 📖, hacking gaming consoles 🎮, and cooking 👨‍🍳</p>

            </div>
        </>
    );
}

export default Opening;