const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  const users = [
    { // 1
      email: "jane@doe.com",
      username: "janeDoe",
      password: bcrypt.hashSync("password", 8)
    },
    { // 2
      email: "john@doe.com",
      username: "johnDoe",
      password: bcrypt.hashSync("password", 8)
    },
  ];

  return knex('users').insert(users);
};
