const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const projectsRouter = require('./projects/projectsRouter');
const resourcesRouter = require('./resources/resourcesRouter');
const tasksRouter = require('./tasks/tasksRouter');

const server = express();

server.use(express.json());

server.get('/', (req, res, next) => {
    res.send('Server is up and running!');
});

server.use('/projects', projectsRouter);
server.use('/tasks', tasksRouter);
server.use('/resources', resourcesRouter);
server.use(errorHandler);

function errorHandler(error, res, req, next) {
    console.log(error.err);
    res.status(error.stat).json({ message: error.message });
}

module.exports = server;
