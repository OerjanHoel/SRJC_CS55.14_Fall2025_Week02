// Week 2 Node Server

// Get http module form Node
const http = require("http");
// Get file system module from Node
const fs = require("fs").promises;

// Set the reachable url and port number
const host = 'localhost';
const port = 8080;

// Create the instance that will serve the html file
const requestListener = function (req, res) {
    fs.readFile(__dirname + "/home.html")
        // Use then() method if html file able to resolve. 200 Standard succes code
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        // Use catch() method if file is nt found. 500 Internal server error
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

// Create the server
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
