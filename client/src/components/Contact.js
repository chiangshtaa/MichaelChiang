import React, { Component } from 'react';
import './css/Contact2.css';
import NotificationSystem from 'react-notification-system';
const axios = require('axios');

// import './css/Contact.css';
// let notificationSystem = React.createRef();

  // addNotification = event => {
  //   event.preventDefault();
  //   const notification = this.notificationSystem.current;
  //   notification.addNotification({
  //     message: 'Notification message',
  //     level: 'success'
  //   });
  // };

class Contact extends Component {
  constructor(props) {
    super(props);
  }

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
      if (res.data.msg === 'success') {
        this.addNotification();
        this.resetForm();
      } else {
        alert("Message failed to send");
      }
    })
  }

  notificationSystem = React.createRef();

  addNotification() {
    const notification = this.notificationSystem.current;
    notification.addNotification({
      message: 'Message successfully sent!',
      level: 'success',
      position: 'tc',
      // autoDismiss: 0
    });
  };

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
            <NotificationSystem ref={this.notificationSystem} style={style}/>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  NotificationItem: { // Override the notification item
    DefaultStyle: { // Applied to every notification, regardless of the notification level
      margin: '10px 5px 2px 1px'
    },

    success: { // Applied only to the success notification item
      color: '#1e836c',
      borderTop: '2px solid #1e836c',
      textAlign: 'center',
    }
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
