const express = require('express');
const Projects = require('./projectsModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.getAll();
        projects.forEach(
            project => (project.completed = Boolean(project.completed))
        );
        res.status(200).json(projects);
    } catch (err) {
        next({
            err: err,
            stat: 500,
            message: 'Could not retrieve list of projects.',
        });
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const [project, tasks, resources] = await Projects.getById(
            req.params.id
        );
        tasks.forEach(task => (task.completed = Boolean(task.completed)));
        project.tasks = tasks;
        project.resources = resources;
        project.completed = Boolean(project.completed);
        res.status(200).json(project);
    } catch (err) {
        next({
            err: err,
            stat: 500,
            message: 'Could not retrieve the project.',
        });
    }
});

router.post('/', async (req, res, next) => {
    try {
        const [addedProject] = await Projects.addProject(req.body);
        addedProject.completed = Boolean(addedProject.completed);
        res.status(201).json(addedProject);
    } catch (err) {
        next({
            err: err,
            stat: 500,
            message: 'Could not add the project.',
        });
    }
});
module.exports = router;
