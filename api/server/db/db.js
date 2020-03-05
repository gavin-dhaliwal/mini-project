const mysql = require("mysql");
const key = require("./service/mysql");

const { connectLimit, password, user, database, host, port } = key; //Deconstruct key

const connect = mysql.createConnection({
  password,
  user,
  database,
  socketPath:
    "/cloudsql/dpduk-developer-gavin-dhaliwal:europe-west2:cloud-sql-instance"
});

// const connect = mysql.createConnection({
//   password,
//   user,
//   database,
//   host,
//   password
// });

const SORT_QUERY_1 = "SELECT * FROM pokemon ORDER BY pokemon_name ASC";
const SORT_QUERY_2 = "SELECT * FROM pokemon ORDER BY pokemon_name DESC";

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

Pokemons_db.orderASC = () => {
  return new Promise((resolve, reject) => {
    connect.query(SORT_QUERY_1, (error, result) => {
      if (error) {
        return reject(error);
      }
      return resolve(result);
    });
  });
};

Pokemons_db.orderDESC = () => {
  return new Promise((resolve, reject) => {
    connect.query(SORT_QUERY_2, (error, result) => {
      if (error) {
        return reject(error);
      }
      return resolve(result);
    });
  });
};

module.exports = Pokemons_db;
