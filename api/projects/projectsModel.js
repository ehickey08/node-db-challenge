const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    addProject,
};

function getAll() {
    return db('projects');
}

async function getById(id) {
    return [
        await db('projects')
            .where({ id })
            .first(),
        await db('tasks as t')
            .where('project_id', id)
            .select('t.id', 't.description', 't.notes', 't.completed'),
        await db('project_resources as pr')
            .where('project_id', id)
            .join('resources as r', 'pr.resource_id', 'r.id')
            .select('r.id', 'r.name', 'r.description'),
    ];
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(([id]) => getById(id));
}
