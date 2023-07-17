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
                        <li className="bio-skill-box">MATLAB</li>
                        <li className="bio-skill-box">R</li>
                        <li className="bio-skill-box">PostgreSQL</li>
                        <li className="bio-skill-box">MySQL</li>
                        <li className="bio-skill-box">HTML</li>
                        <li className="bio-skill-box">CSS</li>
                        <li className="bio-skill-box">React</li>
                        <li className="bio-skill-box">Node.js</li>
                        <li className="bio-skill-box">Express.js</li>
                        <li className="bio-skill-box">Git</li>
                        <li className="bio-skill-box">AWS</li>
                    </ul>


                    <div id="bio-text-container">
                        <b>(Hello)</b>
                        <p id="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
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