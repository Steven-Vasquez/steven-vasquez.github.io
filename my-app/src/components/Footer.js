import "../stylesheets/Footer.css";

export function Footer() {
    return (
        <>
            <div className="footer-container">

                <div className="footer-flexbox">

                    <div className="site-info">
                        <a>Steven Vasquez</a>
                        <div>© 2023, Built by myself in Visual Studio code using React.js, deployed with (somethon)</div>
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
                            <a href="https://github.com/your-username" target="_blank"><i className="fab fa-github"></i></a>
                            <a href="https://linkedin.com/in/your-profile" target="_blank"><i className="fab fa-linkedin"></i></a>
                            <a href="mailto:your-email@example.com"><i className="fas fa-envelope"></i></a> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;