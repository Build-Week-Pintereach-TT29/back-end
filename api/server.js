const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const articlesRouter = require('../articles/articles-router');
const usersRouter = require('../users/users-router');
const boardsRouter = require('../boards/boards-router');
const authRouter = require('../auth/auth-router');
const restricted = require('../auth/restricted-middlware');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/articles', articlesRouter);
server.use('/users', usersRouter);
server.use('/boards', boardsRouter);
server.use('/auth', authRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up and running' });
});


module.exports = server;