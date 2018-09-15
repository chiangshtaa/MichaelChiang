import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';

class CustomNavbar extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "20px",
              width: "80%",
              background: "#f0f0f0"
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
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