import { NavLink } from 'react-router-dom';
import "../stylesheets/BioSection.css"

export function Biography() {
    return (
        <>
            <div className="bio-section" id="Bio">
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
                            I graduated in 2023 from San Francisco State University with a B.S. in Computer Science (GPA 3.8), and I’m currently pursuing an M.S. in Cybersecurity at Georgia Tech.
                        </p> 
                        <p id="about-text" style={{ marginTop: '10px' }}>
                            While my background started in software engineering and research, I’ve recently shifted my focus toward cybersecurity. I'm interested in how security principles apply to real-world systems, and I’m building hands-on experience through my coursework, labs, and personal projects.
                        </p>
                        
                        <NavLink exact to="/about" activeClassName="active" id="about-page-link">
                            <b style={{ fontSize: ".85em", fontWeight: "1000" }}>Full bio page coming soon!</b>
                        </NavLink>
                    </div>


                </div>


            </div>
        </>
    );
}

export default Biography;