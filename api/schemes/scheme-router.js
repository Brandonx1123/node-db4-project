const express = require("express");

const Recipes = require("./scheme-model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.get("/:id", (req, res) => {
  Recipes.getRecipeById(req.params.id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

module.exports = router;
