import { NavLink } from 'react-router-dom';
import '../stylesheets/Navbar.css';
import { Component } from 'react';

export class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <>
                <nav>
                    <div id="home-link">
                        <NavLink exact to="/" activeClassName="active">
                            Steven Vasquez
                        </NavLink>
                    </div>
            
                    <ul id="nav-bar-links" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li>
                            <NavLink exact to="/" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="active">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" activeClassName="active">
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="active">
                                Contact
                            </NavLink>
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
