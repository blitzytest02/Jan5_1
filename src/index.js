/**
 * Node.js Hello World Tutorial - Main Application Entry Point
 * 
 * This file demonstrates fundamental Express.js concepts:
 * - Importing and initializing the Express framework
 * - Creating route handlers for HTTP endpoints
 * - Starting an HTTP server on a configurable port
 * 
 * @module src/index
 */

// Import the Express.js framework
// Express is a minimal and flexible Node.js web application framework
// that provides a robust set of features for web applications
const express = require('express');

// Create an Express application instance
// This is the main application object that we'll use to configure
// routes, middleware, and server settings
const app = express();

// Configure the server port
// Uses the PORT environment variable if set (useful for deployment),
// otherwise defaults to port 3000 for local development
const PORT = process.env.PORT || 3000;

/**
 * GET /hello - Hello World Endpoint
 * 
 * A simple route handler that demonstrates the basic Express.js
 * request/response pattern. When a client makes a GET request
 * to the /hello path, this handler sends back a plain text greeting.
 * 
 * @route GET /hello
 * @returns {string} Plain text response "Hello world"
 * @example
 * // Request:
 * // GET http://localhost:3000/hello
 * //
 * // Response:
 * // Status: 200 OK
 * // Body: Hello world
 */
app.get('/hello', (req, res) => {
  // Send a plain text response to the client
  // res.send() automatically sets the Content-Type header
  // and sends the response body
  res.send('Hello world');
});

// Start the HTTP server only when this file is run directly
// The require.main === module check prevents the server from starting
// when the app is imported for testing purposes
// The server will listen for incoming requests on the specified port
// Once started, it logs a message to the console to confirm it's running
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the Express application instance
// This allows the app to be imported in test files for testing
// without starting the server multiple times
module.exports = app;
