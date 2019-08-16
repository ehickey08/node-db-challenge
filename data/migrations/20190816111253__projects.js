exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('name', 255)
                .unique()
                .notNullable();
            tbl.string('description', 255);
            tbl.boolean('completed').defaultTo(false);
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('description', 255)
                .unique()
                .notNullable();
            tbl.string('notes', 255);
            tbl.boolean('completed').defaultTo(false);
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('name', 255).notNullable().unique();
            tbl.string('description', 255);
        })
        .createTable('contexts', tbl => {
            tbl.increments();
            tbl.string('contexts', 255)
                .unique()
                .notNullable();
        })
        .createTable('project_resources', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('tasks_contexts', tbl => {
            tbl.increments();
            tbl.integer('task_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('tasks')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('context_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('contexts')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('contexts')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks_contexts');
};
