const db = require("../basedatos");

const getPokemon = async (req, res, next) => {
  try {
    const pokemones = await db.query("SELECT * FROM Pokemon");
    res.json(pokemones.rows);
  } catch (error) {
    console.log(error.message);
  }
};

const getPokemonById = async (req, res, net) => {
  const { id } = req.params;
  try {
    const result = await db.query("SELECT * FROM Pokemon WHERE Id = $1", [id]);
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Pokemon no encontrado",
      });
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
};

const createPokemon = async (req, res, next) => {
  const { tipo, nombre, cadenaEvolucion } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO Pokemon(tipo, nombre, cadenaEvolucion) VALUES($1, $2, $3) RETURNING *",
      [tipo, nombre, cadenaEvolucion]
    );

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const updatePokemon = async (req, res, next) => {
  const { id } = req.params;
  const { tipo, nombre, cadenaEvolucion } = req.body;

  try {
    const result = await db.query(
      "UPDATE Pokemon SET tipo = $1, nombre = $2, cadenaEvolucion = $3 WHERE id = $4 RETURNING *",
      [tipo, nombre, cadenaEvolucion, id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Pokemon no actualizado",
      });
    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deletePokemon = async (req, res, next) => {
  res.send("Eliminado un pokemon");
};

module.exports = {
  getPokemon,
  getPokemonById,
  createPokemon,
  updatePokemon,
  deletePokemon,
};
