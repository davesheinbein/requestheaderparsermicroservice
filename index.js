// index.js
// Entry point for your Node.js application

// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import the Express module, which is used to build the web server
var express = require('express');

// Create an instance of an Express application
var app = express();

// Import the CORS module, which allows cross-origin requests (useful for remote testing)
var cors = require('cors');

// Enable CORS with specific options to allow the API to be remotely testable by services like FreeCodeCamp
// The optionSuccessStatus 200 is set to handle older browsers that may not support CORS preflight properly
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files (like CSS, JS, images) from the "public" folder
// These files will be publicly accessible on the server, e.g., for HTML files
app.use(express.static('public'));

// Define a route to serve the index.html file when the root URL ("/") is accessed
// __dirname gives the absolute path to the current directory where this script resides
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint: /api/whoami
// This endpoint responds with the user's IP address, language, and software info
app.get('/api/whoami', function (req, res) {
  // Get the IP address from the 'x-forwarded-for' header, which is set by proxies (like Heroku or load balancers)
  // If not behind a proxy, it falls back to req.connection.remoteAddress, which gives the direct IP
  const ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  // Get the preferred language from the 'accept-language' header (sent by the browser)
  const language = req.headers['accept-language'];
  
  // Get the user agent string from the 'user-agent' header (this contains the OS and browser info)
  const software = req.headers['user-agent'];

  // Respond with a JSON object containing the IP address, language, and software (browser/OS) information
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

// Example API endpoint: /api/hello
// This is a simple test endpoint that returns a JSON object with a greeting message
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Start the server and listen for incoming requests on the specified port
// The port can be set via an environment variable (process.env.PORT) or defaults to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
