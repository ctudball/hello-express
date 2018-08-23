const express = require('express');

// Setup
const server = express();
const port = 3000;


// Start Server
server.listen(port);

// Export for testing
module.exports = server;