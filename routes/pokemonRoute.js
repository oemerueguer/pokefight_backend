const express = require("express");
const pokemonRouter = express.Router();
const data = require("../pokedex.json");

pokemonRouter.get("/", (req, res) => {
  res.send("Welcome to our Pokemon API");
});

pokemonRouter.get("/pokemon", (req, res) => {
  res.status(200).json(data);
});

pokemonRouter.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;
  let result = data.find((item) => item.id === +id);
  //console.log(result);
  res.status(200).json(result);
});

pokemonRouter.get("/pokemon/:id/:info", (req, res) => {
  const info = req.params.info;
  const id = req.params.id;

  let findTarget = "";
  switch (info) {
    case "name":
      findTarget = "name";
      break;
    case "type":
      findTarget = "type";
      break;
    case "base":
      findTarget = "base";
      break;
  }

  if (findTarget) {
    let result = null;
    let element = data.find((i) => i.id === +id);

    element ? (result = element[findTarget]) : null;
    result
      ? res.status(200).json(result)
      : res.status(404).send(`There is no ${findTarget}`);
  } else {
    res
      .status(404)
      .send(`There is no pokemon with id ${id} and info(${findTarget})!`);
  }
});

module.exports = pokemonRouter;
