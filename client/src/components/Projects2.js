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
          name: 'Trello Replica',
          image: Trello,
          description: 'This project is my attempt at a replica of Trello.  I built this app because I felt like it’s an excellent tool for project management in regards to organization and efficiency.  It helped me organize what tasks needed to be done and who was working on them at the time.',
          stack: ['Javascript', 'React', 'HTML5', 'CSS3']

        },
        {
          name: 'Paired',
          image: Paired,
          description: 'Paired is a food app that generates recipes based on food ingredient. Users can search using the search bar or by taking a photo of an ingredient and Paired will recommend recipes that include that food item. Additionally, it also provides wine and beer pairings for those recipes.',
          stack: ['Javascript', 'React', 'HTML5', 'CSS3', 'Node', 'Express', 'MongoDB', 'Heroku']
        },
        {
          name: 'Crypto',
          image: CryptoApp,
          description: 'Crypto is a simple app that generates basic information about the current top 25 coins.  I utilized coinmarketcap\'s API to obtain the information.',
          stack: ['Javascript', 'React', 'HTML5', 'CSS3', 'Node', 'Express', 'RESTfulAPI']
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
                {
                  this.state.projects.slice(0, 2).map((project) => {
                    return (
                      <div className="single-box">
                        <figure><img src={project.image} alt=""/></figure>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <ul>
                          {
                            project.stack.map((tech) => {
                              return (
                                <li>{tech}</li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    )
                  })
                }
              </div>
              <div className="col-md-6">
                {
                  this.state.projects.slice(2, 4).map((project) => {
                    return (
                      <div className="single-box">
                        <figure><img src={project.image} alt=""/></figure>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <ul>
                          {
                            project.stack.map((tech) => {
                              return (
                                <li>{tech}</li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
