const express = require('express');
const path = require('path');
var request = require('request');

const app = express();

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/public')));
app.use(express.static(path.join(__dirname, 'client/build')));


console.log('here');
app.get('/email', (req, res) => {
  console.log('inside here', req.query.start, req.query.end);
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/public/index.html'));
// });


const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(`App listening on port ${port}`);
});








