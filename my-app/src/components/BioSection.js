import { NavLink } from 'react-router-dom';
import "../stylesheets/BioSection.css"

export function Biography() {
    return (
        <>
            <div className="bio-section">
                <div className="bio-header">
                    <h1 style={{ display: 'flex', flexDirection: 'row', fontWeight: 400 }}>
                        <div>My</div>
                        <span>&nbsp;</span>
                        <div className="highlight">
                            <div>Skills</div>
                            <div></div>
                        </div>
                    </h1>
                </div>

                <div className="left-side">
                    <div id="image-container">
                        <img src="/images/headshot.jpg" alt="Headshot" id="headshot" />
                    </div>
                </div>

                <div className="bio">
                    <ul className="skills">
                        <li className="bio-skill-box">Java</li>
                        <li className="bio-skill-box">Python</li>
                        <li className="bio-skill-box">JavaScript</li>
                        <li className="bio-skill-box">TypeScript</li>
                        <li className="bio-skill-box">C++</li>
                        <li className="bio-skill-box">PostgreSQL</li>
                        <li className="bio-skill-box">MySQL</li>
                        <li className="bio-skill-box">HTML</li>
                        <li className="bio-skill-box">CSS</li>
                        <li className="bio-skill-box">React</li>
                        <li className="bio-skill-box">Node.js</li>
                        <li className="bio-skill-box">Express.js</li>
                        <li className="bio-skill-box">AWS</li>
                        <li className="bio-skill-box">Git</li>
                        <li className="bio-skill-box">MATLAB</li>
                        <li className="bio-skill-box">R</li>
                    </ul>


                    <div id="bio-text-container">
                        <b>A bit about me...</b>
                        <p id="about-text">
                            I am a 2023 graduate from San Francisco State University with a B.S. in Computer Science with a 3.8 GPA. I've shifted my focus from becoming an academic researcher to software engineer because it's what I enjoy. I'm glad that the skills I've gained from research help me to be a better engineer.
                        </p>
                        <NavLink exact to="/" activeClassName="active" id="about-page-link">
                            <b style={{ fontSize: ".85em", fontWeight: "1000" }}>Read my full bio</b>
                        </NavLink>
                    </div>


                </div>


            </div>
        </>
    );
}

export default Biography;