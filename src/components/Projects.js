import React, { Component } from 'react';

import './css/Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="Projects scroll-container" id="projects">
        <div className="ProjectsMe">
          <div className="header">Projects</div>

          <div className="projects-container">

            <div className="projects-carousel">

            </div>


            <div className="projects-info">
              <div className="project-details">
                <div className="details">Details</div>
                <div>Name: Pitch Perfect</div>
                <div>
                  Description: Pitch Perfect is a tonal analysis learning 
                  app that allows users to progress through decks of flashcards 
                  where they can compare their pronunciation of a Mandarin word 
                  to a native speaker's pronunciation of that word.
                </div>
                <div>
                  Tech Stack: Javascript, React, React-Router, Redux, HTML/CSS, Semantic-UI React, Node, Express, PostreSQL, Amazon S3
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