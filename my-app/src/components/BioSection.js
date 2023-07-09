import "../stylesheets/BioSection.css"

export function Biography() {
    return (
        <>
            <div className="bio-section">
                <div className="bio-header">
                    <h1 style={{ display: 'flex', flexDirection: 'row' }}>
                        <div>My</div>
                        <span>&nbsp;</span>
                        <div className="highlight"> 
                            <div>Skills</div>
                            <div></div>
                        </div>
                    </h1>
                </div>

                <div className="left-side">
                    {/* Insert your headshot photo here */}
                    <img src="/images/headshot.jpg" alt="Headshot" id="headshot" />
                </div>

                <div className="bio">
                    <div id="skills-container">
                        <ul className="skills">
                            <li className="skill-box">Java</li>
                            <li className="skill-box">Python</li>
                            <li className="skill-box">JavaScript</li>
                            <li className="skill-box">TypeScript</li>
                            <li className="skill-box">C++</li>
                            <li className="skill-box">MATLAB</li>
                            <li className="skill-box">R</li>
                            <li className="skill-box">SQL</li>
                            <li className="skill-box">PostgreSQL</li>
                            <li className="skill-box">HTML</li>
                            <li className="skill-box">CSS</li>
                            <li className="skill-box">React</li>
                            <li className="skill-box">Node.js</li>
                            <li className="skill-box">Express.js</li>
                            <li className="skill-box">Git</li>
                            <li className="skill-box">AWS</li>
                        </ul>
                    </div>
                    
                    
                    <div id="bio-text-container">
                        <b>Hello</b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <p>Link to Bio</p>
                    </div>


                </div>


            </div>
        </>
    );
}

export default Biography;