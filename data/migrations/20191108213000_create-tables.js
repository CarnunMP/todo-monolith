
exports.up = function(knex) {
  return knex.schema
    .createTable('lists', table => {
      table.increments();
      table.string('title', 56)
        .unique() // Doesn't seem to be showing in SQLite Studio...?
        .notNullable();
    })
    .createTable('todos', table => {
      table.increments();
      table.string('text', 256)
        .notNullable();
      table.boolean('done')
        .notNullable()
        .defaultTo('false');
    })
    .createTable('orderings', table => {
      table.integer('list_id')
        .unsigned()
        .notNullable()
        .references('id').inTable('lists');
      table.integer('todo_id')
        .unsigned()
        .notNullable()
        .references('id').inTable('todos');
      table.primary(['list_id', 'todo_id']);
      table.integer('order')
        .unsigned()
        .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('orderings')
    .dropTableIfExists('todos')
    .dropTableIfExists('lists');
};
