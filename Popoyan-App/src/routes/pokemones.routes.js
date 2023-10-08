const { Router } = require("express");
const {
  getPokemon,
  getPokemonById,
  createPokemon,
  updatePokemon,
  deletePokemon,
} = require("../controllers/pokemones.controller");

const router = Router();

router.get("/pokemon", getPokemon);

router.get("/pokemon/:id", getPokemonById);

router.post("/pokemon", createPokemon);

router.put("/pokemon/:id", updatePokemon);

router.delete("/pokemon", deletePokemon);

module.exports = router;
