exports.seed = function(knex) {
    return knex('tasks_contexts').del()
      .then(function () {
        return knex('tasks_contexts').insert([
          {id: 1, task_id: 1, context_id: 3},
          {id: 2, task_id: 1, context_id: 4},
          {id: 3, task_id: 2, context_id: 4},
          {id: 4, task_id: 2, context_id: 1},
          {id: 5, task_id: 3, context_id: 3},
          {id: 6, task_id: 3, context_id: 6},
          {id: 7, task_id: 4, context_id: 4},
          {id: 8, task_id: 4, context_id: 5},
          {id: 9, task_id: 6, context_id: 1},
          {id: 10, task_id: 7, context_id: 1},
          {id: 11, task_id: 8, context_id: 1},
          {id: 12, task_id: 9, context_id: 1}
        ]);
      });
  };
  