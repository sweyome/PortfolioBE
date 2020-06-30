const express = require('express');
const cors = require('cors')
const contactRouter = require('./Api/router');


const server = express();
server.use(express.json());
server.use(cors())
server.use('/api/contacts', contactRouter);

server.get('/', (req, res) =>{
    res.status(200).json({message: 'server is running'})
})

module.exports = server;

