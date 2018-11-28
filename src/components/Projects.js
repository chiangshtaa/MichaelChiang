import React, { Component } from 'react';
import './css/Projects.css';

import PitchPerfect from './css/img/PitchPerfect.jpeg';
import Paired from './css/img/Paired.png';
import Trello from './css/img/Trello.png';
import CryptoApp from './css/img/CryptoApp.png';

class Projects extends Component {
  render() {
    return (
      <div className="Projects scroll-container" id="projects">
        <div className="ProjectsMe">
          <div className="header">Projects</div>
            <div className="wrapper-container">
              <div className="wrapper">

                <ul id="sb-slider" className="sb-slider">
                  <li className="sb-current" >
                    <img src={PitchPerfect} alt="image1"/>
                    <div className="sb-description">
                      <div className="project-name">Pitch Perfect</div>
                    </div>
                    <div className="big-container">
                      <div className="details-container">
                        <div className="project-details">Description:</div>
                        <div className="project-info">
                          Pitch Perfect is a tonal analysis learning 
                          app that allows users to progress through decks of flashcards 
                          where they can compare their pronunciation of a Mandarin word 
                          to a native speaker's pronunciation of that word.
                        </div>
                      </div>
                      <br/>
                      <div className="details-container">
                        <div className="project-details">Tech Stack:</div>
                        <div className="project-info">
                          Javascript, React, React-Router, Redux, HTML/CSS, Semantic-UI React, Node, Express, PostreSQL, Amazon S3, Heroku
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="" >
                    <img src={Paired} alt="image2"/>
                    <div className="sb-description">
                      <div className="project-name">Paired</div>
                    </div>
                    <div className="big-container">
                      <div className="details-container">
                        <div className="project-details">Description:</div>
                        <div className="project-info">
                        Paired is a food app that generates recipes based on 
                        food ingredient. Users can search using the search bar or by 
                        taking a photo of an ingredient and Paired will recommend recipes 
                        that include that food item. Additionally, it also provides wine 
                        and beer pairings for those recipes.
                        </div>
                      </div>
                      <br/>
                      <div className="details-container">
                        <div className="project-details">Tech Stack:</div>
                        <div className="project-info">
                          Javascript, React, HTML/CSS, Node, Express, MongoDB, Heroku
                        </div>
                      </div>
                    </div>
                  </li>

                  <li  className="">
                    <img src={Trello} alt="image3"/>
                    <div className="sb-description">
                      <div className="project-name">Basic Replica of Trello</div>
                    </div>
                    <div className="big-container">
                      <div className="details-container">
                        <div className="project-details">Description:</div>
                        <div className="project-info">
                          This project is my attempt at a replica of Trello.  I built 
                          this app because I felt like it’s an excellent tool for project management 
                          in regards to organization and efficiency.  It helped me organize what 
                          tasks needed to be done and who was working on them at the time.
                        </div>
                      </div>
                      <br/>
                      <div className="details-container">
                        <div className="project-details">Tech Stack:</div>
                        <div className="project-info">
                          Javascript, React, HTML/CSS
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="" >
                    <img src={CryptoApp} alt="image4"/>
                    <div className="sb-description">
                      <div className="project-name">Crypto</div>
                    </div>
                    <div className="big-container">
                      <div className="details-container">
                        <div className="project-details">Description:</div>
                        <div className="project-info">
                          Crypto is a simple app that generates basic information about 
                          the current top 25 coins.  I utilized coinmarketcap's API to 
                          obtain the information.
                        </div>
                      </div>
                      <br/>
                      <div className="details-container">
                        <div className="project-details">Tech Stack:</div>
                        <div className="project-info">
                          Javascript, React, HTML/CSS, Node, Express, RESTful API
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                <div id="nav-arrows" className="nav-arrows">
                  <a href="#next">Next</a>
                  <a href="#previous">Previous</a>
                </div>

              </div>
                <div id="nav-dots" className="nav-dots">
                  <span className="nav-dot-current"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Projects;
