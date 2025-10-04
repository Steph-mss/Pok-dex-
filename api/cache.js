const fs = require("fs");
const path = require("path");

let pokemonCache;

function getPokemonCache() {
  if (pokemonCache) {
    return pokemonCache;
  }

  try {
    const filePath = path.join(__dirname, "..", "data", "pokemons.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const pokemonData = JSON.parse(fileContent);
    pokemonCache = pokemonData;
    return pokemonCache;
  } catch (error) {
    console.error("Error reading or parsing pokemons.json:", error);
    return null;
  }
}

module.exports = { getPokemonCache };
