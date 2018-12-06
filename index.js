const express = require('express');
const path = require('path');
var request = require('request');

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

const { EMAIL, PASS } = require('./config.js');

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/public')));
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/send', (req, res) => {
  console.log('req.body', req.body, req.query);
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Subject: ${req.body.subject}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  console.log('output', output);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
        user: EMAIL, // generated ethereal user
        pass: PASS  // generated ethereal password
    },
    // tls:{
    //   rejectUnauthorized:false
    // }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: `"Nodemailer Contact" ${req.body.email}`, // sender address
      to: EMAIL, // list of receivers
      subject: 'From Portfolio', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
        res.json({
          msg: 'fail'
        })
      } else {
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.json({
          msg: 'success'
        })
      }

  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/public/index.html'));
// });


const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(`App listening on port ${port}`);
});








