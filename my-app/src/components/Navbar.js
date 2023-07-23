import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import '../stylesheets/Navbar.css';

export function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleNavLinkClick = () => {
    setClicked(false);
  };

  const isHomePage = window.location.pathname === '/';

  return (
    <>
      <nav>
        <div id="home-link">
          <Link to="/">Steven Vasquez</Link>
        </div>

        <ul id="nav-bar-links" className={clicked ? "navbar active" : "navbar"}>
          <li>
            <Link to="/" onClick={handleNavLinkClick}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleNavLinkClick}>About</Link>
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleNavLinkClick}
              >
                Projects
              </ScrollLink>
            ) : (
              <a href="/#Projects" onClick={handleNavLinkClick}>
                Projects
              </a>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleNavLinkClick}
              >
                Contact
              </ScrollLink>
            ) : (
              <a href="/#Contact" onClick={handleNavLinkClick}>
                Contact
              </a>
            )}
          </li>
        </ul>

        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
