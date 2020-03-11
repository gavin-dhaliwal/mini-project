const Pokemons_db = require("./actions/cloudSQL");

exports.deleteCloudSQL = async (req, res) => {
  try {
    await Pokemons_db.deleteRecord(req.query.name);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};
