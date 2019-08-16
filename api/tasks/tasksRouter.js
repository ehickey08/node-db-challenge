const express = require('express');

const Tasks = require('./tasksModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.getAll();
        tasks.forEach(
            task => (task.completed = Boolean(task.completed))
        );
        res.status(200).json(tasks);
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
        const [task, contexts] = await Tasks.getById(
            req.params.id
        );
        task.completed = Boolean(task.completed);
        task.contexts = contexts;
        res.status(200).json(task);
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
        const [addedTask] = await Tasks.addTask(req.body);
        addedTask.completed = Boolean(addedTask.completed);
        res.status(201).json(addedTask);
    } catch (err) {
        next({
            err: err,
            stat: 500,
            message: 'Could not add the project.',
        });
    }
});
module.exports = router;

module.exports = router;