const express = require("express");
const db = require("../db/db");
const axios = require("axios");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is active").status(200);
});

router.get("/api/all", async (req, res) => {
  try {
    const result = await db.all();
    res.json(result);
  } catch (e) {
    return console.log(e);
  }
});

router.get("/api/one/:id", async (req, res) => {
  try {
    const request = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
    );

    const allowed = [
      "abilities",
      "height",
      "base_experience",
      "name",
      "types",
      "weight"
    ];

    const results = request.data;

    const filtered = Object.keys(results)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        return { ...obj, [key]: results[key] };
      }, {});
    res.json(filtered);
  } catch (e) {
    return res.sendStatus(500);
  }
});

module.exports = router;
