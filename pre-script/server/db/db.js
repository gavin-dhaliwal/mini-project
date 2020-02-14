const mysql = require("mysql");

const connect = mysql.createConnection({
	connectLimit: 10,
	password: "admin",
	user: "devuser",
	database: "Pokemons",
	host: "",
	port: ""
});

let Pokemons_db = {};

Pokemons_db.all = () => {
	return new Promise((resolve, reject) => {
		connect.query("SELECT * FROM pokemon", (error, result) => {
			if (error) {
				return reject(error);
			}

			return resolve(result);
		});
	});
};

Pokemons_db.add = (pokemon_name, pokemon_image) => {
	return new Promise((resolve, reject) => {
		connect.query(
			"INSERT INTO pokemon (pokemon_name, pokemon_generation, pokemon_image) VALUES (?,?,?)",
			[pokemon_name, 1, pokemon_image],
			(error, result) => {
				if (error) {
					return reject(error);
				}
				return resolve(result);
			}
		);
	});
};

Pokemons_db.insertAll = data => {
	const insertAllData =
		"INSERT INTO pokemon (pokemon_name, pokemon_image) VALUES ?";
	return new Promise((resolve, reject) => {
		connect.query(insertAllData, [data], (error, result) => {
			if (error) {
				return reject(error);
			}
			return resolve(result);
		});
	});
};

module.exports = Pokemons_db;
