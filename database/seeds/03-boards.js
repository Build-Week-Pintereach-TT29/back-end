
exports.seed = function(knex) {
  const boards = [
    { // 1
      name: "Books",
      category: "reading",
      description: "list of books for leisure reading",
      user_id: 1 // belongs to Jane
    },
    { // 2
      name: "Programming",
      category: "coding",
      description: "programming languages to learn",
      user_id: 1 // Jane
    },
    { // 3
      name: "Recipes",
      category: "cooking",
      description: "recipes to try",
      user_id: 1 // Jane
    },
    { // 4
      name: "Destinations",
      category: "travel",
      description: "places to go",
      user_id: 2 // John
    },
    { // 5
      name: "Home Improvement",
      category: "projects",
      description: "must-do renovations",
      user_id: 2 // John
    },
  ];

  return knex('boards').insert(boards);
};
