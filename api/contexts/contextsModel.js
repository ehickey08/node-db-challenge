const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    addContext,
};

function getAll() {
    return db('contexts');
}

async function getById(id) {
    return [
        await db('contexts')
            .where({ id })
            .first(),
        await db('tasks_contexts as tc')
            .where('context_id', id)
            .join('tasks as t', 'tc.task_id', 't.id')
            .select('t.id', 't.description', 't.notes', 't.completed')
            .where('t.completed', 0),
    ];
}

function addContext(task) {
    return db('contexts')
        .insert(task)
        .then(([id]) => getById(id));
}
