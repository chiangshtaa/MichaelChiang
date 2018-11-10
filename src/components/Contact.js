import React, { Component } from 'react';

import './css/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact scroll-container" id="contact">
        <div className="ContactMe">
          <div className="header">Contact Me</div>
          <div className="contact-container">

            <div className="contact-info">
              <input className="input name" type="text" placeholder="Your Name"/>
              <input className="input email" type="text" placeholder="Email Address"/>
            </div>

            <div className="subject">
              <input className="input subject" type="text" placeholder="Subject"/>
            </div>

            <div className="message">
              <textarea className="text-area input" placeholder="Message"></textarea>
            </div>

            <button className="button" type="button">Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;