import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import '../stylesheets/Navbar.css';

export function Navbar() {
  const location = useLocation();

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
          <a href="/">Steven Vasquez</a>
        </div>

        <ul id="nav-bar-links" className={clicked ? "navbar active" : "navbar"}>
          <li>
            <NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleNavLinkClick}>About</NavLink>
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
