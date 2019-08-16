const express = require('express');
const Contexts = require('./contextsModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const contexts = await Contexts.getAll();
        res.status(200).json(contexts);
    } catch (err) {
        next({
            err: err,
            stat: 500,
            message: 'Could not retrieve list of contexts.',
        });
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const [context, tasks] = await Contexts.getById(
            req.params.id
        );
        tasks.forEach(task => (task.completed = Boolean(task.completed)));
        context.tasks = tasks;
        res.status(200).json(context);
    } catch (err) {
        next({
            err: err,
            stat: 500,
            message: 'Could not retrieve the context.',
        });
    }
});

router.post('/', async (req, res, next) => {
    try {
        const [addedContext] = await Contexts.addContext(req.body);
        res.status(201).json(addedContext);
    } catch (err) {
        next({
            err: err,
            stat: 500,
            message: 'Could not add the context.',
        });
    }
});
module.exports = router;
