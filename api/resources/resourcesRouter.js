const express = require('express');

const Resources = require('./resourcesModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.getAll();
        res.status(200).json(resources);
    } catch (err) {
        next({
            err: err,
            stat: 500,
            message: 'Could not retrieve list of resources.',
        });
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const [resource, projects] = await Resources.getById(req.params.id);
        projects.forEach(project => (project.completed = Boolean(project.completed)));
        resource.projects = projects;
        res.status(200).json(resource);
    } catch (err) {
        next({
            err: err,
            stat: 500,
            message: 'Could not retrieve the resource.',
        });
    }
});

router.post('/', async (req, res, next) => {
    try {
        const [addedResource] = await Resources.addResource(req.body);
        res.status(201).json(addedResource);
    } catch (err) {
        next({
            err: err,
            stat: 500,
            message: 'Could not add the resource.',
        });
    }
});
module.exports = router;
