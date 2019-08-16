const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    addResource,
};

function getAll() {
    return db('resources');
}

async function getById(id) {
    return [
        await db('resources')
            .where({ id })
            .first(),
        await db('project_resources as pr')
            .where('resource_id', id)
            .join('projects as p', 'pr.project_id', 'p.id')
            .select('p.id', 'p.name', 'p.description', 'p.completed'),
    ];
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
        .then(([id]) => getById(id));
}
