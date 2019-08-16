exports.seed = function(knex) {
    return knex('contexts').del()
      .then(function () {
        return knex('contexts').insert([
          {id: 1, contexts: 'At home'},
          {id: 2, contexts: 'At the gym'},
          {id: 3, contexts: 'At Computer'},
          {id: 4, contexts: 'Online'},
          {id: 5, contexts: 'At work'},
          {id: 6, contexts: 'At school'}
        ]);
      });
  };
  