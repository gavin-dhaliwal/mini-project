const pokemon_storage = require("./actions/cloudStorage");

exports.deleteCloudStorage = async (req, res) => {
  try {
    await pokemon_storage.deleteInStorage(req.query.name);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};
