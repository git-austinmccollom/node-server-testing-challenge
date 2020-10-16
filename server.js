const express = require('express');
const server = express();
const helmet = require('helmet');
const dbFun = require('./dbFunctions')

server.use(helmet());
server.use(express.json());

//CR_D
//Create
server.post('/api/parties', (req, res) => {
    dbFun.addParty(req.body)
    .then( dbRes => {
        res.status(201).json(dbRes)
    })
    .catch( dbErr => {
        res.status(500).json(dbErr)
    })
})

// Read

// Delete

// Sanity Check

server.get('/', (req, res) => {
    res.status(200).json({ api: "running" });
})

module.exports = server;