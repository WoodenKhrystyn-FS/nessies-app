//Mock goodies data:

// const Goodies = require("../models/goodiesModel");

//Create an array to hold goodies data:
let goodies = [];

//CRUD ops for goodies

// let goodies = [
//   { id: 1, name: "Chocolate Chip Cookies", price: 1.5 },
//   { id: 2, name: "Red Velvet Cupcakes", price: 2.0 },
//   { id: 3, name: "Brownies", price: 2.5 },
//   { id: 4, name: "Vanilla Cake", price: 15.0 },
//   { id: 5, name: "Macadamia Nut Cookies", price: 1.75 },

// ];

//Get all goodies:
exports.getAll = (req, res) => {
  res.status(200).json(goodies);
};

//Get one goodie by ID:
exports.getGoodie = (req, res) => {
  const id = parseInt(req.params.id);
  const goodie = goodies.find((g) => g.id === id);

  if (goodie) {
    res.status(200).json(goodie);
  } else {
    res.status(404).json({ message: "Goodie Not Found" });
  }
};

//Create new goodie:
exports.createGoodie = (req, res) => {
  const { name, price, description, category, available } = req.body;

  if (!name || !price || !description || !category) {
    return res
      .status(400)
      .json({ message: "Name, price, description, and category are required" });
  }

  const newGoodie = new Goodies({
    id: goodies.length + 1,
    name,
    price,
    description,
    category,
    available: available !== undefined ? available : true,
  });

  goodies.push(newGoodie);
  res.status(200).json({ message: "Goodie created", goodie: newGoodie });
};

//Update goodies by Id::
exports.updateGoodie = (req, res) => {
  const id = parseInt(req.params.id);
  const index = goodies.findIndex((g) => g.id === id);

  if (index === -1) {
    res.status(404).json({ message: "Goodie Not Found" });
  }

  goodies[index] = {
    id,
    name: req.body.name,
    price: req.body.price,
  };

  res.status(200).json({ message: "Goodie updated", goodies: goodies[index] });
};

//Get all goodies:
exports.getAll = (req, res) => {
  res.status(200).json(goodies);
};

//Get one goodie by ID:
exports.getGoodie = (req, res) => {
  const id = parseInt(req.params.id);
  const goodie = goodies.find((g) => g.id === id);

  if (goodie) {
    res.status(200).json(goodie);
  } else {
    res.status(404).json({ message: "Goodie Not Found" });
  }
};

//Create new goodie:
exports.createGoodie = (req, res) => {
  const newGoodie = {
    id: goodies.length + 1,
    name: req.body.name,
    price: req.body.price,
  };

  goodies.push(newGoodie);

  res.status(200).json({
    message: "New Goodie Created",
    goodie: newGoodie,
  });
};

//Update goodies by Id::
exports.updateGoodie = (req, res) => {
  const id = parseInt(req.params.id);
  const index = goodies.findIndex((g) => g.id === id);

  if (index === -1) {
    res.status(404).json({ message: "Goodie Not Found" });
  }

  goodies[index] = {
    id,
    name: req.body.name,
    price: req.body.price,
  };

  res.status(200).json({
    message: "Goodie Updated",
    goodie: goodies[index],
  });
};

//Delete goodies by Id:
exports.deleteGoodie = (req, res) => {
  const id = parseInt(req.params.id);
  const index = goodies.findIndex((g) => g.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Goodie Not Removed" });
  }

  const deletedGoodie = goodies.splice(index, 1)[0];
  res.status(200).json({ message: "Goodie Removed", goodie: deletedGoodie });
};
