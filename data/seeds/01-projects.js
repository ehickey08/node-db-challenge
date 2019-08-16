exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {id: 1, name: 'Learn React', completed: true, description: 'Study the docs to learn hooks.'},
        {id: 2, name: 'Exercise', completed: false, description: 'Lose your fat.'},
        {id: 3, name: 'Yard Work', completed: false}
      ]);
    });
};
