/**
 * Node.js Hello World Tutorial - Integration Tests
 * 
 * This file contains Jest integration tests for the /hello HTTP endpoint.
 * It demonstrates fundamental testing concepts:
 * - Using Supertest to make HTTP requests against an Express app
 * - Writing async tests with async/await syntax
 * - Testing HTTP status codes and response bodies
 * - Using Jest's BDD-style describe/it blocks
 * 
 * @module tests/hello.test
 */

// Import Supertest library for HTTP assertions
// Supertest allows us to test HTTP endpoints without starting an actual server
// It wraps the Express app and provides a fluent API for making requests
const request = require('supertest');

// Import the Express application instance from our main module
// This is the same app instance that would handle real HTTP requests
// The app doesn't start the server when imported (see require.main check in index.js)
const app = require('../src/index');

/**
 * Test Suite: GET /hello Endpoint
 * 
 * This describe block groups all tests related to the GET /hello endpoint.
 * Using describe blocks helps organize tests logically and provides
 * clear output when tests run.
 */
describe('GET /hello', () => {
  /**
   * Test Case 1: Verify HTTP 200 Status Code
   * 
   * This test confirms that the /hello endpoint returns a 200 OK status,
   * indicating a successful HTTP request. The 200 status code is the
   * standard response for successful HTTP requests.
   */
  it('returns status 200', async () => {
    // Make a GET request to the /hello endpoint using Supertest
    // The request function wraps our Express app for testing
    const res = await request(app).get('/hello');
    
    // Assert that the response status code is 200 (OK)
    // toBe() is Jest's strict equality matcher
    expect(res.status).toBe(200);
  });

  /**
   * Test Case 2: Verify Response Body Content
   * 
   * This test confirms that the /hello endpoint returns the exact
   * text "Hello world" in the response body. The res.text property
   * contains the raw response body as a string.
   */
  it('returns Hello world', async () => {
    // Make a GET request to the /hello endpoint
    const res = await request(app).get('/hello');
    
    // Assert that the response body text matches exactly "Hello world"
    // res.text provides the response body as a string
    expect(res.text).toBe('Hello world');
  });

  /**
   * Test Case 3: Verify 404 for Unknown Routes
   * 
   * This test confirms that requesting an undefined route returns
   * a 404 Not Found status code. This is important for verifying
   * that only defined routes are accessible and unknown paths are
   * properly rejected.
   */
  it('returns 404 for unknown routes', async () => {
    // Make a GET request to an undefined route
    const res = await request(app).get('/unknown');
    
    // Assert that the response status code is 404 (Not Found)
    // Express automatically returns 404 for undefined routes
    expect(res.status).toBe(404);
  });
});
