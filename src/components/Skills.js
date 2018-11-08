import React, { Component } from 'react';

import './css/Skills.css';

class Skills extends Component {
  render() {
    return (
      <div className="Skills scroll-container" id="skills">
        <div className="SkillsMe">
          <div className="skills-info">
            <h2> Skills & Experience</h2>
            <div>
              My main area of expertise is web development.  I work mostly 
              with Javascript, ReactJS, HTML, and CSS to build web apps.  I 
              also have experience in backend technologies including NodeJS/Express 
              and both relational and non-relational databases.
              I'm a Javascript web developer
            </div>
            <br/>
            <div>
              I actively stay up to date on new industry technologies, which 
              allows me to stay relevant in the rapidly changing tech industry.  
              Building user-friendly web pages and applications is truly a passion 
              of mine and I am confident that both my technical skills and work 
              ethics will be of value to your company.
            </div>
            <br/>
            <div>
              Let's get in touch!
            </div>
            <div>
              <span>Please check out my </span>
              <a href="https://www.linkedin.com/in/michaelchiang3/" target="_blank">
                <span className=".linkedIn">
                  LinkedIn
                </span>
              </a>
              <span> profile or </span>
              <div id="contactMenu" className="menu skills-page-contact">
                contact 
              </div>
              <span className="end">&nbsp;me!</span>
            </div>
          </div>
          <div className="skills-wheel">
            <div id="tag-cloud"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;