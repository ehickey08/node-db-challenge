exports.seed = function(knex) {
    return knex('resources')
        .del()
        .then(function() {
            return knex('resources').insert([
                {
                    id: 1,
                    name: 'Lawn Mower',
                    description: 'Probably will want a ride on.',
                },
                { id: 2, name: 'Pole saw' },
                {
                    id: 3,
                    name: 'Computer',
                    description: 'Get two monitors too.',
                },
                { id: 4, name: 'Keyboard' },
                { id: 5, name: 'Mouse' },
                { id: 6, name: 'Weights', description: '' },
                {
                    id: 7,
                    name: 'Exercise Ball',
                    description: "Don't just sit on it. You bum.",
                },
                { id: 8, name: 'Treadmill' },
            ]);
        });
};
