const express = require('express');
const servicedata = require('./src/service')

// Setup
const server = express();
const port = 3000;


// Create main endpoint
server.get('/', (request, response) =>{
    response.send('<h1>Hullo from Express</h1>')
});

// Create heath endpoint
let health = servicedata.health();
server.get('/health', (req, res) => {
    res.contentType('text/plain');
    res.send(health);
});

// Create metadata endpoint
let metadata = servicedata.metadata();
server.get('/metadata', (req, res) => {
    res.contentType('application/json');
    res.send(metadata);
});

// Start Server
server.listen(port);
console.log(`Service starting on port ${port}`);

// Export for testing
module.exports = server;