import React, { Component } from 'react';
import './css/Contact2.css';
const axios = require('axios');

// import './css/Contact.css';


class Contact extends Component {
  componentDidMount() {
    axios.get('/email', {
      params: {
        start: 'hello',
        end: 'there'
      }
    })
    .then((res) => {
      console.log('response', res);
    })
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="Contact scroll-container" id="contact">
        <div className="ContactMe">
          <div className="header">Contact Me</div>
          <div className="contact-container">

            <div className="contact-info">
              <form>
                <div className="contacter-info">
                  <div className="name">
                    <input type="text" name="" required/>
                    <label>Name</label>
                  </div>

                  <div className="email">
                    <input type="text" name="" required/>
                    <label>Email</label>
                  </div>
                </div>

                <div>
                  <input type="text" name="" required/>
                  <label>Subject</label>
                </div>
                <div>
                  <textarea required></textarea>
                  <label>Message</label>
                </div>

                <input type="submit" name="" value="Send"/>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

// class Contact extends Component {
//   render() {
//     return (
//       <div className="Contact scroll-container" id="contact">
//         <div className="ContactMe">
//           <div className="header">Contact Me</div>
//           <div className="contact-container">

//             <div className="contact-info">
//               <input className="input name" type="text" placeholder="Your Name"/>
//               <input className="input email" type="text" placeholder="Email Address"/>
//             </div>

//             <div className="subject">
//               <input className="input subject" type="text" placeholder="Subject"/>
//             </div>

//             <div className="message">
//               <textarea className="text-area input" placeholder="Message"></textarea>
//             </div>

//             <button className="button" type="button">Send</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
