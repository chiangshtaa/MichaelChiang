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
                    <div className="project-details">
                      Description: Pitch Perfect is a tonal analysis learning 
                      app that allows users to progress through decks of flashcards 
                      where they can compare their pronunciation of a Mandarin word 
                      to a native speaker's pronunciation of that word.
                    </div>
                    <div>
                      Tech Stack: Javascript, React, React-Router, Redux, HTML/CSS, Semantic-UI React, Node, Express, PostreSQL, Amazon S3
                    </div>
                  </li>
                  <li className="" >
                    <img src={pic2} alt="image2"/>
                    <div className="sb-description">
                      <div className="project-name">Honest Entertainer</div>
                    </div>
                    <div className="project-details">
                      Description: Pitch Perfect is a tonal analysis learning 
                      app that allows users to progress through decks of flashcards 
                      where they can compare their pronunciation of a Mandarin word 
                      to a native speaker's pronunciation of that word.
                    </div>
                    <div>
                      Tech Stack: Javascript, React, React-Router, Redux, HTML/CSS, Semantic-UI React, Node, Express, PostreSQL, Amazon S3
                    </div>
                  </li>
                  <li  className="">
                    <img src={pic3} alt="image3"/>
                    <div className="sb-description">
                      <div className="project-name">Brave Astronaut</div>
                    </div>
                    <div className="project-details">
                      Description: Pitch Perfect is a tonal analysis learning 
                      app that allows users to progress through decks of flashcards 
                      where they can compare their pronunciation of a Mandarin word 
                      to a native speaker's pronunciation of that word.
                    </div>
                    <div>
                      Tech Stack: Javascript, React, React-Router, Redux, HTML/CSS, Semantic-UI React, Node, Express, PostreSQL, Amazon S3
                    </div>
                  </li>
                  <li className="" >
                    <img src={pic4} alt="image4"/>
                    <div className="sb-description">
                      <div className="project-name">Affectionate Decision Maker</div>
                    </div>
                    <div className="project-details">
                      Description: Pitch Perfect is a tonal analysis learning 
                      app that allows users to progress through decks of flashcards 
                      where they can compare their pronunciation of a Mandarin word 
                      to a native speaker's pronunciation of that word.
                    </div>
                    <div>
                      Tech Stack: Javascript, React, React-Router, Redux, HTML/CSS, Semantic-UI React, Node, Express, PostreSQL, Amazon S3
                    </div>
                  </li>
                </ul>

                <div id="shadow" className="shadow"></div>

                <div id="nav-arrows" className="nav-arrows">
                  <a href="#">Next</a>
                  <a href="#">Previous</a>
                </div>

                <div id="nav-dots" className="nav-dots">
                  <span className="nav-dot-current"></span>
                  <span className=""></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Projects;


// import './App.css';

// class component
// class Projects extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       projects: [
//       {
//         data: 'Hello',
//         index: 0
//       },
//       {
//         data: 'Hi',
//         index: 1
//       },
//       {
//         data: 'Bye',
//         index: 2
//       },
//       {
//         data: 'Goodbye',
//         index: 3
//       }],
//       currentProject: {
//         data: 'Hello',
//         index: 0
//       }
//     }
//   };

//   nextProject() {
//     const newIndex = this.state.currentProject.index+1;
//     this.setState({
//       currentProject: this.state.projects[newIndex]
//     }, console.log(this.state));
//   }

//   prevProject() {
//     const newIndex = this.state.currentProject.index-1;
//     this.setState({
//       currentProject: this.state.projects[newIndex]
//     })
//   }

//   render() {
//     const { projects, currentProject } = this.state;
//     return (
//       <div className="App">

//         <button 
//           onClick={() => this.nextProject()} 
//           disabled={currentProject.index === this.state.projects.length-1}>
//           Next
//         </button>
//         <button 
//           onClick={() => this.prevProject()} 
//           disabled={currentProject.index === 0}>
//           Prev
//         </button>

//         <div className="page">
//             <section>
//                 <h1>Image slideshow React tutorial.</h1>
//             </section>

//             <div className="col">
//               <div className={`cards-slider active-slide-${currentProject.index}`}>
//                 <div className="cards-slider-wrapper" style={{
//                   'transform': `translateX(-${currentProject.index*(100/projects.length)}%)`
//                 }}>
//                   {
//                     projects.map((project, i) => <Cards key={i} project={project} />)
//                   }
//                 </div>
//               </div>
//             </div>

//         </div>
//       </div>
//     );
//   }
// }

// export default Projects;




// class Projects extends Component {
//   render() {
//     return (
//       <div className="Projects scroll-container" id="projects">
//         <div className="ProjectsMe">
//           <div className="header">Projects</div>

//           <div className="projects-container">

//             <div className="projects-carousel">

//             </div>


//             <div className="projects-info">
//               <div className="project-details">
//                 <div className="details">Details</div>
//                 <div>Name: Pitch Perfect</div>
//                 <div>
//                   Description: Pitch Perfect is a tonal analysis learning 
//                   app that allows users to progress through decks of flashcards 
//                   where they can compare their pronunciation of a Mandarin word 
//                   to a native speaker's pronunciation of that word.
//                 </div>
//                 <div>
//                   Tech Stack: Javascript, React, React-Router, Redux, HTML/CSS, Semantic-UI React, Node, Express, PostreSQL, Amazon S3
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }