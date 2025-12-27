const express = require("express");
const cors = require("cors");
const goodiesRoutes = require("./routes/goodies");
const app = express();
const PORT = 5000;

//Middleware to parse JSON
app.use(express.json());
app.use(cors());

//Sample API route:
app.use("/api/goodies", goodiesRoutes);

app.get("/", (req, res) => {
  res.send("Goodies API is running!");
});

//Start server:
app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});

module.exports = app;
