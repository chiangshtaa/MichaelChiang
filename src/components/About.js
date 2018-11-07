import React, { Component } from 'react';

import './css/About.css';

class About extends Component {
  render() {
    return (
      <div className="About scroll-container"  id="about">
        <div className="AboutMe">
          <div className="info">
            <h2> About Me </h2>
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
          <div className="tictactoe">
            TIC TAC TOE
          </div>
        </div>
      </div>
    );
  }
}

export default About;