import "../stylesheets/Footer.css";

export function Footer() {
    return (
        <>
            <div className="footer-container">

                <div className="footer-flexbox">

                    <div className="site-info">
                        <a>Steven Vasquez</a>
                        <div>© 2023, Built by myself in <strong>Visual Studio Code</strong> using <strong>React.js</strong>, deployed with <strong>(something)</strong></div>
                    </div>

                    <div className="site-links">
                        <div className="footer-header">Site Links</div>
                        <div className="footer-site-links">
                            <a href="/">Home</a>
                            <a href="/">Projects</a>
                            <a href="/">About</a>
                            <a href="/">Contact</a>
                        </div>
                    </div>

                    <div className="contact-links">
                        <div className="footer-header">Get in touch</div>
                        <div className="footer-social-icons">
                            <a href="https://github.com/Steven-Vasquez" target="_blank"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/steven-vasquez/" target="_blank"><i className="fab fa-linkedin"></i></a>
                            <a href="mailto:stevenvasquez.pro@gmail.com"><i className="fas fa-envelope"></i></a> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;