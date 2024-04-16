// Create web server
// Create a web server that listens for incoming requests on port 3000. When a request is received, the server should respond with the following:
// A status code of 200
// A JSON object with a key of "status" and a value of "success"
// The following headers:
// Access-Control-Allow-Origin: *
// Content-Type: application/json
// The server should respond to all requests with this information. You can use the following code to create the server:

// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "application/json");
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.end('{"status": "success"}');
// });

// server.listen(3000);

// You can test the server by running the following command in the terminal:

// curl http://localhost:3000
// This will send a request to the server and print out the response. The response should look like this:

// {"status": "success"}
// If you see this response, then your server is working correctly. You can also test the server by opening http://localhost:3000 in a web browser.

const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end('{"status": "success"}');
});

server.listen(3000);