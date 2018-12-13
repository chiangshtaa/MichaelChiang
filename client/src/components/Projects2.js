import React, { Component } from 'react';
import './css/Projects2.css';
import './css/Projects.css';

import PitchPerfect from './css/img/PitchPerfect.jpeg';
import Paired from './css/img/Paired.png';
import Trello from './css/img/Trello.png';
import CryptoApp from './css/img/CryptoApp.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: 'Pitch Perfect',
          image: PitchPerfect,
          description: 'Pitch Perfect is a tonal analysis learning app that allows users to progress through decks of flashcards where they can compare their pronunciation of a Mandarin word to a native speaker\'s pronunciation of that word.',
          stack: ['Javascript', 'React', 'React-Router', 'Redux', 'HTML5', 'CSS3', 'Semantic-UI-React', 'Node', 'Express', 'PostgreSQL', 'Amazon S3', 'Heroku']
        },
        {
          name: 'Paired',
          image: Paired,
          description: 'Pitch Perfect is a tonal analysis learning app that allows users to progress through decks of flashcards where they can compare their pronunciation of a Mandarin word to a native speaker\'s pronunciation of that word.',
          stack: ['Javascript', 'React', 'React-Router', 'Redux', 'HTML5', 'CSS3', 'Semantic-UI-React', 'Node', 'Express', 'PostgreSQL', 'Amazon S3', 'Heroku']
        },
      ]      
    }
  }
  render() {
    return (
      <div className="Projects scroll-container" id="projects">
        <div className="ProjectsMe">
          <div className="header">Projects</div>
          <div className="container-fluid">
            <div className="row blog-list">
              <div className="col-md-6">
                <div className="single-box">
                  <figure><img src={PitchPerfect} alt=""/></figure>
                  <h3>Pitch Perfect</h3>
                  <p>
                    Pitch Perfect is a tonal analysis learning 
                    app that allows users to progress through decks of flashcards 
                    where they can compare their pronunciation of a Mandarin word 
                    to a native speaker's pronunciation of that word.
                  </p>
                  <ul>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>React-Router</li>
                    <li>Redux</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Semantic-UI React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>Amazon S3</li>
                    <li>Heroku</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-box">
                  <figure><img src={Paired} alt=""/></figure>
                  <ul>
                    <li><i className="fa fa-calendar-o" aria-hidden="true"></i> Dec 17, 2016</li>
                    <li><i className="fa fa-user-o" aria-hidden="true"></i> Admin</li>
                    <li><i className="fa fa-comments-o" aria-hidden="true"></i> Featured</li>
                  </ul>
                  <h3>It was popularised in the 1960s</h3>
                  <p>
                      t's time to play the music. It's time to light the lights. It's time to meet the Muppets on the Muppet Show tonight! Boy the way Glen Miller played Songs the hit parade. 
                  </p>
                  <span className="more">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-box">
                  <figure><img src={Trello} alt=""/></figure>
                  <ul>
                    <li><i className="fa fa-calendar-o" aria-hidden="true"></i> Dec 17, 2016</li>
                    <li><i className="fa fa-user-o" aria-hidden="true"></i> Admin</li>
                    <li><i className="fa fa-comments-o" aria-hidden="true"></i> Featured</li>
                  </ul>
                  <h3>It was popularised in the 1960s</h3>
                  <p>
                      t's time to play the music. It's time to light the lights. It's time to meet the Muppets on the Muppet Show tonight! Boy the way Glen Miller played Songs the hit parade. 
                  </p>
                  <span className="more">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-box">
                  <figure><img src={CryptoApp} alt=""/></figure>
                  <ul>
                    <li><i className="fa fa-calendar-o" aria-hidden="true"></i> Dec 17, 2016</li>
                    <li><i className="fa fa-user-o" aria-hidden="true"></i> Admin</li>
                    <li><i className="fa fa-comments-o" aria-hidden="true"></i> Featured</li>
                  </ul>
                  <h3>It was popularised in the 1960s</h3>
                  <p>
                      t's time to play the music. It's time to light the lights. It's time to meet the Muppets on the Muppet Show tonight! Boy the way Glen Miller played Songs the hit parade. 
                  </p>
                  <span className="more">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
