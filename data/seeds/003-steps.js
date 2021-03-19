exports.seed = function (knex) {
  return knex("steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        {
          step_number: 1,
          step_instructions: "put yeast in bowl and make dough",
          recipe_id: 1,
        },
        {
          step_number: 2,
          step_instructions: "roll dough and put tomato sauce",
          recipe_id: 1,
        },
        {
          step_number: 3,
          step_instructions: "Put cheese on dough and put into oven",
          recipe_id: 1,
        },
        {
          step_number: 1,
          step_instructions: "Put desired pasta in boiling water",
          recipe_id: 2,
        },
        {
          step_number: 2,
          step_instructions:
            "Throw salt and pepper inside water while pasta is boiling",
          recipe_id: 2,
        },
        {
          step_number: 3,
          step_instructions: "Strain pasta then add sauce",
          recipe_id: 2,
        },
        {
          step_number: 1,
          step_instructions: "Boil chicken broth in pan",
          recipe_id: 3,
        },
        {
          step_number: 2,
          step_instructions: "Add vegetables to boiling broth",
          recipe_id: 3,
        },
      ]);
    });
};
