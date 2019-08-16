exports.seed = function(knex) {
    return knex('tasks')
        .del()
        .then(function() {
            return knex('tasks').insert([
                {
                    id: 1,
                    description: 'Buy a computer',
                    notes: 'Make sure its a Mac.',
                    completed: true,
                    project_id: 1,
                },
                {
                    id: 2,
                    description: 'Sign up for school.',
                    completed: true,
                    project_id: 1,
                },
                {
                    id: 3,
                    description: 'Get to the React unit.',
                    notes: 'Cheat on all the Sprints',
                    completed: true,
                    project_id: 1,
                },
                {
                    id: 4,
                    description: 'Sign up for a gym membership.',
                    completed: true,
                    project_id: 2,
                },
                {
                    id: 5,
                    description: 'Attend the gym.',
                    completed: true,
                    project_id: 2,
                },
                {
                    id: 6,
                    description: 'Knock out some curls.',
                    notes: 'It is almost beach season. Tighten up.',
                    completed: false,
                    project_id: 2,
                },
                {
                    id: 7,
                    description: 'Pull weeds',
                    completed: false,
                    project_id: 3,
                },
                {
                    id: 8,
                    description: 'Mow the lawn.',
                    completed: false,
                    project_id: 3,
                },
                {
                    id: 9,
                    description: 'Trim the palms.',
                    notes: 'Use extension ladder if needed.',
                    completed: false,
                    project_id: 3,
                },
            ]);
        });
};
