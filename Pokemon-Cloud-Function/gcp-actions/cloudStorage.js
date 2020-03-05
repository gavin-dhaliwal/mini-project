const { Storage } = require("@google-cloud/storage");

const storage = new Storage();

exports.deleteInStorage = async name => {
  try {
    await storage
      .bucket("pokemon-images")
      .file(`images/${name}.png`)
      .delete();
  } catch (e) {
    console.log(e);
  }
};
