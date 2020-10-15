exports.up = function(knex) {
  return knex.schema.createTable('parties', tbl => {
      tbl.increments();
      tbl.string("zip").notNullable();
      tbl.integer("radius").notNullable().defaultTo(5);
      tbl.boolean("matches").defaultTo(false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('parties')
};
