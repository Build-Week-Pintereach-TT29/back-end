
exports.seed = function(knex) {
  const boards = [
    { // 1
      name: "Books",
      category: "reading",
      description: "list of books for leisure reading",
      user_id: 1 // belongs to Harry
    },
    { // 2
      name: "Programming",
      category: "coding",
      description: "programming languages to learn",
      user_id: 1
    },
    { // 3
      name: "Recipes",
      category: "cooking",
      description: "recipes to try",
      user_id: 1
    },
    { // 4
      name: "Destinations",
      category: "travel",
      description: "places to go",
      user_id: 2 // belongs to Ron
    },
    { // 5
      name: "Home Improvement",
      category: "projects",
      description: "must-do renovations",
      user_id: 2 
    },
  ];

  return knex('userBoards').insert(boards);
};

