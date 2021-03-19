exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_id: 1, ingredient_name: "cheese" },
    { ingredient_id: 2, ingredient_name: "flour" },
    { ingredient_id: 3, ingredient_name: "chicken" },
  ]);
};
