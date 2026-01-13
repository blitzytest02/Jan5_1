# Node.js Hello World Tutorial

A minimal Node.js tutorial project demonstrating how to create a simple HTTP server with Express.js. This project implements a single GET endpoint at `/hello` that responds with "Hello world".

## Table of Contents

- [Overview](#overview)
- [Learning Objectives](#learning-objectives)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Testing the Endpoint](#testing-the-endpoint)
- [API Reference](#api-reference)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [License](#license)

## Overview

This tutorial project serves as an introduction to building web servers with Node.js and Express.js. It demonstrates the fundamental concepts of:

- Setting up a Node.js project with npm
- Installing and using Express.js as a web framework
- Creating HTTP route handlers
- Responding to GET requests with plain text

The project is intentionally minimal to focus on core concepts without unnecessary complexity.

## Learning Objectives

By working through this tutorial, you will learn how to:

1. **Initialize a Node.js project** - Understand the role of `package.json` and npm for managing dependencies
2. **Install Express.js** - Add a web framework to handle HTTP requests and routing
3. **Create an Express application** - Initialize an Express app instance and configure it
4. **Define route handlers** - Create endpoints that respond to specific HTTP methods and paths
5. **Start an HTTP server** - Bind your application to a port and listen for incoming requests
6. **Test API endpoints** - Verify your server responds correctly using curl or a browser

## Prerequisites

Before you begin, ensure you have the following installed on your system:

| Requirement | Minimum Version | Recommended Version | How to Check |
|-------------|-----------------|---------------------|--------------|
| Node.js | >=18.0.0 | 20.x (LTS) | `node --version` |
| npm | >=9.0.0 | 11.x | `npm --version` |

### Installing Node.js

If you don't have Node.js installed, download it from the [official Node.js website](https://nodejs.org/). We recommend using the LTS (Long Term Support) version for stability.

Alternatively, you can use a version manager like [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager):

```bash
# Install nvm (if not already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js 20 (LTS)
nvm install 20
nvm use 20
```

## Installation

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will install:
- **express** (v5.x) - The web framework for handling HTTP requests

And development dependencies:
- **jest** - Testing framework
- **supertest** - HTTP assertion library for testing endpoints

## Running the Server

### Start the Server

To start the HTTP server, run:

```bash
npm start
```

You should see the following output:

```
Server running on port 3000
```

The server is now listening for HTTP requests on port 3000.

### Custom Port Configuration

You can configure the server to run on a different port by setting the `PORT` environment variable:

```bash
# Linux/macOS
PORT=8080 npm start

# Windows (Command Prompt)
set PORT=8080 && npm start

# Windows (PowerShell)
$env:PORT=8080; npm start
```

### Stopping the Server

To stop the server, press `Ctrl+C` in the terminal where it's running.

## Testing the Endpoint

Once the server is running, you can test the `/hello` endpoint using various methods:

### Using curl

Open a new terminal window and run:

```bash
curl http://localhost:3000/hello
```

Expected output:

```
Hello world
```

### Using curl with Verbose Output

To see the full HTTP response including headers:

```bash
curl -v http://localhost:3000/hello
```

Expected output (abbreviated):

```
< HTTP/1.1 200 OK
< Content-Type: text/html; charset=utf-8
< 
Hello world
```

### Using a Web Browser

Open your web browser and navigate to:

```
http://localhost:3000/hello
```

You should see "Hello world" displayed in the browser window.

### Using Postman or Similar Tools

1. Open Postman (or your preferred API client)
2. Create a new GET request
3. Enter the URL: `http://localhost:3000/hello`
4. Click "Send"
5. Verify the response body shows "Hello world"

## API Reference

### GET /hello

Returns a simple "Hello world" greeting.

| Property | Value |
|----------|-------|
| **Endpoint** | `/hello` |
| **Method** | GET |
| **Authentication** | None required |
| **Request Body** | None |

#### Response

| Property | Value |
|----------|-------|
| **Status Code** | 200 OK |
| **Content-Type** | text/html; charset=utf-8 |
| **Body** | `Hello world` |

#### Example Request

```bash
curl -X GET http://localhost:3000/hello
```

#### Example Response

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 11

Hello world
```

#### Error Responses

| Status Code | Description |
|-------------|-------------|
| 404 Not Found | The requested path does not exist (e.g., `/helloo`) |

## Running Tests

This project includes automated tests to verify the endpoint behavior.

### Run All Tests

Execute the test suite with:

```bash
npm test
```

### Expected Test Output

```
 PASS  tests/hello.test.js
  GET /hello
    ✓ returns 200 status code
    ✓ returns Hello world text

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
```

### Test Coverage

The tests verify:
- The `/hello` endpoint returns a 200 status code
- The response body contains exactly "Hello world"

## Project Structure

```
project-root/
├── src/
│   └── index.js          # Main Express application entry point
├── tests/
│   └── hello.test.js     # Endpoint integration tests
├── .gitignore            # Git ignore patterns for Node.js
├── .nvmrc                # Node.js version specification (20)
├── package.json          # npm configuration and dependencies
└── README.md             # This documentation file
```

### File Descriptions

| File | Description |
|------|-------------|
| `src/index.js` | The main application file that initializes Express, defines the `/hello` route, and starts the HTTP server |
| `tests/hello.test.js` | Jest test suite that verifies the `/hello` endpoint works correctly |
| `package.json` | Defines project metadata, dependencies (Express), dev dependencies (Jest, Supertest), and npm scripts |
| `.nvmrc` | Specifies Node.js version 20 for consistent development environments |
| `.gitignore` | Prevents tracking of `node_modules/`, log files, and environment files |

## Troubleshooting

### Common Issues

#### "Port already in use" Error

If you see an error like `EADDRINUSE: address already in use :::3000`, another process is using port 3000. Solutions:

1. **Use a different port:**
   ```bash
   PORT=3001 npm start
   ```

2. **Find and stop the process using port 3000:**
   ```bash
   # Linux/macOS
   lsof -i :3000
   kill -9 <PID>
   
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

#### "Module not found" Error

If you see errors about missing modules, ensure you've run:

```bash
npm install
```

#### Node.js Version Issues

If you encounter compatibility issues, verify your Node.js version:

```bash
node --version
```

Ensure it's 18.0.0 or higher. If using nvm, you can switch to the correct version:

```bash
nvm use
```

## Next Steps

After completing this tutorial, consider exploring:

1. **Adding more endpoints** - Create POST, PUT, and DELETE routes
2. **JSON responses** - Return JSON data using `res.json()`
3. **Request parameters** - Handle URL parameters and query strings
4. **Middleware** - Add request logging, error handling, and validation
5. **Database integration** - Connect to MongoDB, PostgreSQL, or other databases
6. **API documentation** - Generate OpenAPI/Swagger documentation

## License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

**Happy coding!** 🚀

If you have questions or run into issues, feel free to open an issue in the repository.
