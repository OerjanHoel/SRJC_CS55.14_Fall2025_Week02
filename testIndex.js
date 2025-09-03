// Week 2 Node Server

// Get http module form Node
const http = require("http");
// Get file system module from Node
const fs = require('fs').promises;

// Set the reachable url and port number
const host = '127.0.0.1';
const port = 8080;

// Create the instance that will serve the html file
const requestListener = function (req, res) {
    console.log('Loading file');

    fs.readFile(__dirname + "/testHome.html")

        // Use then() method if html file able to resolve. 200 Standard succes code
        .then(contents => {
            res.setHeader("Content-Type", "text/html; charset=UTF-8");
            res.writeHead(200);
            res.end(contents);
        })
        // Use catch() method if file is not found. 500 Internal server error
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

// Create the server
let nodeServer = http.createServer(
    requestListener
);
console.log('Server Started');
// Listen for incoming requests
nodeServer.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
