
exports.seed = function(knex) {
  const users = [
    { // 1
      email: "jane@doe.com",
      username: "janeDoe",
      password: "password"
    },
    { // 2
      email: "john@doe.com",
      username: "johnDoe",
      password: "password"
    },
  ];

  return knex('users').insert(users);
};
