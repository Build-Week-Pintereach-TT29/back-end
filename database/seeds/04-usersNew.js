const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  const users = [
    { // 1
      email: "harry@potter.com",
      username: "harrypotter",
      password: bcrypt.hashSync("password", 8)
    },
    { // 2
      email: "ron@weasley.com",
      username: "ronweasley",
      password: bcrypt.hashSync("password", 8)
    },
  ];

  return knex('usersTbl').insert(users);
};
