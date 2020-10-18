
exports.up = function(knex) {
    return knex.schema
    .createTable('usersTbl', tbl => {
        tbl.increments();
        tbl.string('email').notNullable().unique();
        tbl.string('username').notNullable().unique();
        tbl.string('password').notNullable();
    })
    .createTable('userBoards', tbl => {
        tbl.increments();
        tbl.string('name');
        tbl.string('category').notNullable();
        tbl.text('description');

        tbl.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable()
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('userBoards')
    .dropTableIfExists('usersTbl')
};
