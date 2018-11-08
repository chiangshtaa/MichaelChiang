import React, { Component } from 'react';

import './css/Skills.css';

class Skills extends Component {
  render() {
    return (
      <div className="Skills scroll-container" id="skills">
        <div className="SkillsMe">
          <div className="skills-info">
            HELLO THERE, THIS IS MY SKILLS PAGE
            HELLO THERE, THIS IS MY SKILLS PAGE
            HELLO THERE, THIS IS MY SKILLS PAGE
            HELLO THERE, THIS IS MY SKILLS PAGE
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