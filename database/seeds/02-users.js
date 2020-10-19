const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  const users = [
    { // 1
      name: "Jane Doe",
      email: "jane@doe.com",
      username: "janedoe",
      password: bcrypt.hashSync("password", 8),
      terms: true
    },
    { // 2
      name: "John Doe",
      email: "john@doe.com",
      username: "johndoe",
      password: bcrypt.hashSync("password", 8),
      terms: true
    },
  ];

  return knex('users').insert(users);
};
