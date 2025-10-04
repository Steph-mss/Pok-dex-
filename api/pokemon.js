const { getPokemonCache } = require("./cache");
const express = require("express");
const cors = require("cors");

function handlePokemonRequest(req, res) {
  const pokemon = getPokemonCache();
  if (!pokemon) return res.status(500).send("Internal Server Error");
  res.status(200).json(pokemon);
}

if (process.env.VERCEL) {
  //  Simulation serverless (vercel dev ou prod)
  module.exports = (req, res) => handlePokemonRequest(req, res);
} else {
  //  Serveur Express pour tests classiques
  const app = express();
  app.use(cors());
  app.get("/api/pokemon", handlePokemonRequest);
  const port = 3000;
  app.listen(port, () =>
    console.log(`✅ Server running on http://localhost:${port}`)
  );
}
