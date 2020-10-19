
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('email').notNullable().unique();
        tbl.string('username').notNullable().unique();
        tbl.string('password').notNullable();
    })
    .createTable('boards', tbl => {
        tbl.increments();
        tbl.string('name');
        tbl.string('category').notNullable();
        tbl.text('description');

        tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('boards')
    .dropTableIfExists('users')
};
