const express = require('express');
const contactRouter = require('./Api/router');


const server = express();
server.use(express.json);
server.use('/api/contacts', contactRouter);

server.get('/', (req, res) =>{
    res.status(200).json({message: 'server is running'})
})

module.exports = server;

