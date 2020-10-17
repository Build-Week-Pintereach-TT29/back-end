const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const articlesRouter = require('../articles/articles-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/articles', articlesRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up and running' });
});


module.exports = server;