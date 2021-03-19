const db = require("../../data/db-config");

function getRecipes() {
  return db("recipes").select("recipe_name as recipe");
}

function getRecipeById() {}

module.exports = {
  getRecipes,
  getRecipeById,
};
