const express = require("express");
const db = require("../db/db");
const axios = require("axios");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is active").status(200);
});

router.get("/gcp/script", async (req, res) => {
  const result = await db.all();
  res.json(result);
});

// router.get("/pokeapi/all", async (req, res) => {
// 	const PokemonNameresults = await axios.get(
// 		"https://pokeapi.co/api/v2/generation/1/"
// 	);
// 	const pokemonNames = PokemonNameresults.data.pokemon_species.map(pokemon => {
// 		return pokemon.name;
// 	});

// 	const pokemonPromise = pokemonNames.map(name =>
// 		axios({
// 			url: `https://pokeapi.co/api/v2/pokemon/${name}`,
// 			method: "GET",
// 			headers: {
// 				"content-type": "application/json",
// 				accept: "application/json"
// 			}
// 		})
// 	);

// 	const results = await Promise.all(pokemonPromise);
// 	const finalResults = results.map(
// 		({
// 			data: {
// 				name = "defaultName",
// 				sprites: { front_default: image = "defaultImageURL" } = {}
// 			} = {}
// 		}) => [name, image]
// 	);

// 	//

// 	try {
// 		const write = await db.insertAll(finalResults);
// 	} catch (e) {
// 		console.log(e);
// 	}

// 	// const mapResTodb = finalResults.map(async pokemon => {
// 	// 	const writeTodb = await db.add(pokemon.name, pokemon.image)
// 	// });

// 	res.send(200);
// });

/*
FIRESTORE CODE BELOW ---------
*/

// const PokemonNameresults = await axios.get(
// 	"https://pokeapi.co/api/v2/generation/1/"
//   );
//   const pokemonNames = PokemonNameresults.data.pokemon_species.map(
// 	pokemon => {
// 	  return pokemon.name;
// 	}
//   );

//   const pokemonPromise = pokemonNames.map(name =>
// 	axios({
// 	  url: `https://pokeapi.co/api/v2/pokemon/${name}`,
// 	  method: "GET",
// 	  headers: {
// 		"content-type": "application/json",
// 		accept: "application/json"
// 	  }
// 	})
//   );

//   const allowed = [
// 	"abilities",
// 	"height",
// 	"base_experience",
// 	"name",
// 	"types",
// 	"weight"
//   ];

//   const results = await Promise.all(pokemonPromise);
//   const finalResults = results.map(result => result.data);

//   const filter = finalResults.map(results => {
// 	const filtered = Object.keys(results)
// 	  .filter(key => allowed.includes(key))
// 	  .reduce((obj, key) => {
// 		return { ...obj, [key]: results[key] };
// 	  }, {});
// 	return filtered;
//   });

//   filter.map(pokemon => {
// 	const write = firestore_db.addOne(pokemon.name, pokemon);
//   });

module.exports = router;
