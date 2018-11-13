import React, { Component } from 'react';
import { Carousel, Item } from 'react-bootstrap';
import './css/Projects.css';
// import Cards from './Cards';

import pic from './css/img/snowboard-mountain.jpg';
import pic2 from './css/img/tictactoe.jpg';
import pic3 from './css/img/snowboard-white.jpeg';
import pic4 from './css/img/profilePic.jpeg';

// import './css/swiper.min.css';
// import './css/Projects2.css';

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
                    <img src={pic} alt="image1"/>
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
                    <img src={pic2} alt="image2"/>
                    <div className="sb-description">
                      <div className="project-name">Paired</div>
                    </div>
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
                        Tech Stack: Javascript, React, HTML/CSS, Node, Express, MongoDB, Heroku
                      </div>
                    </div>
                  </li>

                  <li  className="">
                    <img src={pic3} alt="image3"/>
                    <div className="sb-description">
                      <div className="project-name">Basic Replica of Trello</div>
                    </div>
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

                  </li>
                  <li className="" >
                    <img src={pic4} alt="image4"/>
                    <div className="sb-description">
                      <div className="project-name">Affectionate Decision Maker</div>
                    </div>

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
                        Tech Stack: Javascript, React, React-Router, Redux, HTML/CSS, Semantic-UI React, Node, Express, PostreSQL, Amazon S3, Heroku
                      </div>
                    </div>
                  </li>
                </ul>

                <div id="nav-arrows" className="nav-arrows">
                  <a href="#">Next</a>
                  <a href="#">Previous</a>
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
