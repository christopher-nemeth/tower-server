
exports.up = function (knex, Promise) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments();
    table.text('name');
    table.integer('difficulty');
    table.integer('rating');
    table.text('comment');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('reviews');
};
