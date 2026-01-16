//Mock database (in-memory):
let goodies = [];

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
    res.status(404).json({ message: "No goodie was found" });
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
  res.status(200).json({ message: "New goodies created" });
};

//Update goodies by Id::
exports.updateGoodie = (req, res) => {
  const id = parseInt(req.params.id);
  const index = goodies.findIndex((g) => g.id === id);

  if (index === -1) {
    res.status(404).json({ message: "No goodie was updated" });
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
    res.status(404).json({ message: "No goodie was found" });
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
    message: "New goodie created",
    goodie: newGoodie,
  });
};

//Update goodies by Id::
exports.updateGoodie = (req, res) => {
  const id = parseInt(req.params.id);
  const index = goodies.findIndex((g) => g.id === id);

  if (index === -1) {
    res.status(404).json({ message: "No goodie was updated" });
  }

  goodies[index] = {
    id,
    name: req.body.name,
    price: req.body.price,
  };

  res
    .status(200)
    .json({ 
      message: "Goodie was updated", 
      goodie: goodies[index] });
};

//Delete goodies by Id:
exports.deleteGoodie = (req, res) => {
  const id = parseInt(req.params.id);
  const index = goodies.findIndex((g) => g.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Goodie was not deleted" });
  }

  const deletedGoodie = goodies.splice(index, 1)[0];
  res
    .status(200)
    .json({ message: "Goodie has been deleted", goodie: deletedGoodie });
};
