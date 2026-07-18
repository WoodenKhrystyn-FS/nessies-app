//Mock goodies data:

// const Goodies = require("../models/goodiesModel");

//CRUD ops for goodies

let goodies = [
  {
    id: 1,
    name: "Custom Birthday Cake",
    price: 65,
    description:
      "A fully custom delicious birthday cake to match your theme and flavors",
    category: "Cake",
    available: true,
    image: "/Logo.png",
  },
  {
    id: 2,
    name: "Wedding Cupcake Dozen",
    price: 36,
    description:
      "Elegant cupcakes decorated for weddings, showers and special events",
    category: "Cupcake",
    available: true,
    image: "/Logo.png",
  },
  {
    id: 3,
    name: "Fudge Brownie Tray",
    price: 24,
    description: "Rich and fudgy brownies perfect for parties and gatherings",
    category: "Brownie",
    available: true,
    image: "/Logo.png",
  },
  {
    id: 4,
    name: "Strawberry Celebration Cake ",
    price: 60,
    description:
      "Classic vanilla cake layered with fresh strawberries and buttercream icing",
    category: "Cake",
    available: true,
    image: "/Logo.png",
  },
  {
    id: 5,
    name: "Cinnamon Roll Box",
    price: 22,
    description:
      "Fluffy cinnamon rolls topped with delicious homemade cream cheese icing ",
    category: "Breakfast",
    available: true,
    image: "/Logo.png",
  },
  {
    id: 6,
    name: "Chocolate Chip Cookie Dozen",
    price: 18,
    description: "Classic chocolate chip cookies freshly baked by the dozen",
    category: "Cookie",
    available: true,
    image: "../IMAGES/ChocolateChipCookies.webp",
  },
  {
    id: 7,
    name: "Decorated Sugar Cookie Dozen",
    price: 25,
    description: "Custom decorated sugar cookies for any event",
    category: "Cookie",
    available: true,
    image: "/Logo.png",
  },
  {
    id: 8,
    name: "Assorted Dessert Box",
    price: 42,
    description:
      "Bakery sample including cupcakes, cookies, brownies and seasonal goodies",
    category: "Desserts",
    available: true,
    image: "/Logo.png",
  },
];

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

  const newGoodie = {
    id: goodies.length + 1,
    name,
    price,
    description,
    category,
    available: available !== undefined ? available : true,
  };

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
