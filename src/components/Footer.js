import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import "../stylesheets/Footer.css";

export function Footer() {



    const isHomePage = window.location.pathname === '/';
    return (
        <>
            <div className="footer-container">

                <div className="footer-flexbox">

                    <div className="site-info">
                        <Link to="/">Steven Vasquez</Link>
                        <div>© 2023, Built by myself in <strong>Visual Studio Code</strong> using <strong>React.js</strong>, deployed with <strong>(something)</strong></div>
                    </div>

                    <div className="site-links">
                        <div className="footer-header">Site Links</div>
                        <div className="footer-site-links">
                            <a href="/">Home</a>

                            {isHomePage ? (
                                <ScrollLink
                                    activeClass="active"
                                    to="Projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Projects
                                </ScrollLink>
                            ) : (
                                <a href="/#Projects">
                                    Projects
                                </a>
                            )}

                            {/*<NavLink to="/about" onClick={handleNavLinkClick}>About</NavLink>*/}
                            {isHomePage ? (
                                <ScrollLink
                                    activeClass="active"
                                    to="Bio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    About
                                </ScrollLink>
                            ) : (
                                <a href="/#Bio">
                                    About
                                </a>
                            )}

                            {isHomePage ? (
                                <ScrollLink
                                    activeClass="active"
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Contact
                                </ScrollLink>
                            ) : (
                                <a href="/#Contact">
                                    Contact
                                </a>
                            )}
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