const express = require('express');
const server = express();
const helmet = require('helmet');

server.use(helmet());
server.use(express.json());

//CR_D
// Create


// Read

// Delete

// Sanity Check

server.get('/', (req, res) => {
    res.status(200).json({ api: "running" });
})

module.exports = server;