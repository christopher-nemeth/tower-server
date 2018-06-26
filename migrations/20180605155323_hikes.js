
exports.up = function (knex, Promise) {
  return knex.schema.createTable('hikes', (table) => {
    table.increments();
    table.text('name');
    table.text('location');
    table.text('terrain');
    table.integer('elevation');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('hikes');
};
