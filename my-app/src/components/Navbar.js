import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../stylesheets/Navbar.css';

export class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleNavLinkClick = () => {
    this.setState({ clicked: false });
  };

  render() {
    return (
      <>
        <nav>
          <div id="home-link">
            <Link to="/">Steven Vasquez</Link>
          </div>

          <ul id="nav-bar-links" className={this.state.clicked ? "navbar active" : "navbar"}>
            <li>
              <Link to="/" onClick={this.handleNavLinkClick}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={ this.handleNavLinkClick}>About</Link>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.handleNavLinkClick}
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.handleNavLinkClick}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>

          <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
