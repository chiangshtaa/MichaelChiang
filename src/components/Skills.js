import React, { Component } from 'react';

import './css/Skills.css';

import rotate from './rotate.js';
import { rotateSkills } from './rotateSkills.js';
import $ from 'jquery';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: false,
      radius: 75,
      iconSize: 50,
      fontSize: 24,
      title: 'Icon Size'
    }
  }

  componentDidMount() {
    rotate(this.state.icon);
  }

  switch() {
    $('svg').remove();
    let newTitle = this.state.title === 'Icon Size' ? 'Font Size' : 'Icon Size';
    let next = !this.state.icon;
    rotate(next, this.state.iconSize, this.state.fontSize, this.state.radius + '%');
    this.setState({
      icon: next,
      title: newTitle
    })
  }

  changeIconSize(e) {
    $('svg').remove();
    let newIconSize = e.target.value;
    this.setState({
      iconSize: newIconSize
    }, () => rotate(this.state.icon, this.state.iconSize, this.state.fontSize, this.state.radius + '%'))
  }

  changeFontSize(e) {
    $('svg').remove();
    let newFontSize = e.target.value;
    this.setState({
      fontSize: newFontSize
    }, () => rotate(this.state.icon, this.state.iconSize, this.state.fontSize, this.state.radius + '%'))
  }

  changeRadius(e) {
    $('svg').remove();
    let newRadius = e.target.value;
    this.setState({
      radius: newRadius
    }, () => rotate(this.state.icon, this.state.iconSize, this.state.fontSize, this.state.radius + '%'))
  }

  render() {
    return (
      <div className="Skills scroll-container" id="skills">
        <div className="SkillsMe">
          <div className="header">Skills & Experience</div>
          <div className="skills-container">
            <div className="info-container">
              <div className="skills-info">
                <div>
                  My main area of expertise is web development.  I work mostly 
                  with Javascript, ReactJS, HTML, and CSS to build web apps.  I 
                  also have experience in backend technologies including NodeJS/Express 
                  and both relational and non-relational databases.
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
                  <span>Please check out my </span>
                  <a href="https://www.linkedin.com/in/michaelchiang3/">
                    <span className=".linkedIn">
                      LinkedIn
                    </span>
                  </a>
                  <span> profile or </span>
                  <div id="contactMenu" className="menu skills-page-contact">
                    contact
                  </div>
                  <span className="end">&nbsp;me!</span>
                </div></div>
            </div>
          </div>

          <div className="wheel-container">

            <div className="controls-container">
              <div className="controls">
                <button className="switch" type="button" onClick={() => this.switch()}>Try Me!</button>
                <br/>
                <br/>
                { !this.state.icon ? 
                  <input 
                    className="slider icon" 
                    step="10" 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={this.state.iconSize} 
                    onChange={(e) => this.changeIconSize(e)}/> :
                  <input 
                  className="slider font" 
                  step="2" 
                  type="range" 
                  min="12" 
                  max="36" 
                  value={this.state.fontSize} 
                  onChange={(e) => this.changeFontSize(e)}/>
                }
                <div className="slider-description">{this.state.title}</div>

                <input className="slider" step="5" type="range" min="20" max="75" value={this.state.radius} onChange={(e) => this.changeRadius(e)}/>
                <div className="slider-description radius">Radius</div>
              </div>
            </div>

            <div className="sphere">
              <div id="tag-cloud"></div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Skills;