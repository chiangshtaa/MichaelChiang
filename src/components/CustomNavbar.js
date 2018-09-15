import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './css/CustomNavbar.css';

// import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';

class CustomNavbar extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="CustomNavBar">
            <ul className="list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomNavbar;