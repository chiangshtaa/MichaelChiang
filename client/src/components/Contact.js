import React, { Component } from 'react';
import './css/Contact2.css';
const axios = require('axios');

// import './css/Contact.css';


class Contact extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    axios({
      method: "POST",
      url: '/send',
      data: {
        name: name,
        email: email,
        subject: subject,
        message: message
      }
    })
    .then((res) => {
      console.log('res', res);
      if (res.data.msg === 'success') {
        alert("Message sent!");
        this.resetForm();
      } else {
        alert("Message failed to send");
      }
    })
  }

  resetForm() {
    document.getElementById('contact-form').reset();
  }


  render() {
    return (
      <div className="Contact scroll-container" id="contact">
        <div className="ContactMe">
          <div className="header">Contact Me</div>
          <div className="contact-container">

            <div className="contact-info">
              <form id="contact-form" method="POST" action="send" onSubmit={(e) => this.handleSubmit(e)}>
                <div className="contacter-info">
                  <div className="name">
                    <input type="text" name="name" required id="name"/>
                    <label>Name</label>
                  </div>

                  <div className="email">
                    <input type="text" name="email" required id="email"/>
                    <label>Email</label>
                  </div>
                </div>

                <div>
                  <input type="text" name="subject" required id="subject"/>
                  <label>Subject</label>
                </div>
                <div>
                  <textarea required name="message" id="message"></textarea>
                  <label>Message</label>
                </div>

              {/*<button type="submit"> Submit </button>*/}
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
