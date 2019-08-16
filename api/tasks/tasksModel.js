const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    addTask,
};

function getAll() {
    return db('tasks');
}

async function getById(id) {
    return [
        await db('tasks')
            .where({ id })
            .first(),
        await db('tasks_contexts as tc')
            .where('task_id', id)
            .join('contexts as c', 'tc.context_id', 'c.id')
            .select('c.id', 'c.contexts'),
    ];
}

function addTask(task) {
    return db('tasks')
        .insert(task)
        .then(([id]) => getById(id));
}
