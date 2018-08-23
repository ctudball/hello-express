const express = require('express');

// Setup
const server = express();
const port = 3000;


// Create main endpoint
server.get('/', (request, response) =>{
    response.send('<h1>Hello from Express</h1>')
});

// Create heath endpoint
server.get('/health', (req, res) => {
    res.contentType('text/plain');
    res.send("OK");
});

// Create metadata endpoint
let metadata = '';
server.get('/metadata', (req, res) => {
    res.contentType('application/json');
    res.send(metadata);
});

// Start Server
server.listen(port);

// Export for testing
module.exports = server;