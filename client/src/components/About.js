import React, { Component } from 'react';

// import Board2048 from './Board2048.js';
import MineSweeper from './minesweeper/MineSweeper.js';
import './css/About.css';

// import ticTacToe from './css/img/tictactoe.jpg';

class About2 extends Component {
  render() {
    return (
      <div className="About scroll-container" id="about">
        <div className="AboutMe">
          <div className="header">My Story</div>
          <div className="about-container">
            <div className="info2 column">
              <div className="journey">
                <div>
                  When I was young, I had a very different idea about
                  what it meant to be a software engineer.  Watching my dad
                  write code in Assembly, a language so foreign and abstract
                  to me, I became certain I would never be capable of 
                  something so technical.
                </div>
                <br/>
                <div>
                  Fast forward to 2016, I was working at Genentech, but I had completed
                  several articles on coding and even read an entire book on Javascript.
                  I was writing my own algorithms and working through practice problems
                  found on Leetcode, CodeSignal, and other online resources.  I would
                  stay up late nights because of a bug in my algorithm or to figure out
                  a problem I was stuck on.  It was at this point when I knew I had
                  found something I was truly passionate about.
                </div>
                <br/>
                <div>
                  In 2017, I took the leap and pivoted my career into software engineering.
                  I attended a bootcamp called Hack Reactor where I gained an enormous amount
                  of training in web development.  By the time I had graduated, I had designed, 
                  built, and deployed several websites as well as one mobile application.  
                  I didn't learn all the technologies out there, but I learned how to learn.
                  I found ways to solve novel problems, work effectively with peers, 
                  and most importantly, stay committed through the whole process.
                </div>
                <br/>
                <div>
                  In terms of continuing my development, I read books, blogs, articles, and 
                  keep up to date on my skills by practicing algorithms and building small applications.  
                  I attend meetups to find inspiration and insights to how teams are managed 
                  and I get to learn about the unique backgrounds and experiences of different engineers.
                </div>
                <br/>
                <div>
                  I certainly took a non-traditional path into software engineering.
                  I may not have a degree in computer science or have 5+ years of engineering 
                  experience, but I do have an ongoing drive, a demonstrated ability to learn, 
                  and a strong passion for engineering.
                </div>
              </div>
            </div>
            <div className="container-2048">
              {<MineSweeper />}
              {/*<Board2048/>*/}
              {/*<img className="tictactoe" src={ticTacToe} alt="tictactoe" />*/}

              {/*<div className="rules">
                <div className="how-to">How To Play: </div>
                <div className="instructions">
                   When two tiles with the same number touch, they'll merge into one! 
                   Reach <div className="win">2048</div> and you win!
                </div>
              </div>*/}
              <div className="instruction">
                <div className="how-to">How To Play</div>
                <div>If you click on a bomb, you lose. </div>
                <div>If you click all the squares (without clicking on any bombs), you win.</div>
                <div>Right click to mark a square you think is a bomb.</div>
                <div>Flag all the bombs and you win!</div>
                {/*<div className="how-to">How To Play: </div>
                <div className="instructions">
                  <div>If you click on a bomb, you lose. </div>
                  <div>If you click all the squares (without clicking on any bombs), you win.</div>
                  <div>Right click to mark a square you think is a bomb.</div>
                  <div>Flag all the bombs and you win!</div>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About2;


