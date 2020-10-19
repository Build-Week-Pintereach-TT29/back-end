
exports.up = function(knex) {
    return knex.schema.table('users', tbl => {
        tbl.string('name')
        tbl.boolean('terms').defaultTo(false);
    })
  
};

exports.down = function(knex) {
  return knex.schema.table('users', tbl => {
      tbl.dropColumn('name')
      tbl.dropColumn('terms')
  })
};
