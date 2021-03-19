exports.seed = function (knex) {
  return knex("ingredient_steps")
    .del()
    .then(function () {
      return knex("ingredient_steps").insert([
        { step_id: 1, ingredient_id: 1, quantity: 2 },
        { step_id: 2, ingredient_id: 2, quantity: 4 },
        { step_id: 3, ingredient_id: 3, quantity: 55 },
        { step_id: 4, ingredient_id: 2, quantity: 2 },
        { step_id: 5, ingredient_id: 4, quantity: 1 },
        { step_id: 6, ingredient_id: 5, quantity: 1 },
      ]);
    });
};
