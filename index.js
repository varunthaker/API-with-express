const express = require("express");
const PORT = 8000 || process.env.PORT;
const dbConnect = require("./db/connect.js");
const Product = require("./db/models/Product.js");

const app = express();
app.use(express.json());

dbConnect();

app.get("/", (req, res) => {
  res.send("Please Route to /api/v1/products for data");
});

app.get("/api/v1/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/v1/products/:id", async (req, res) => {
  try {
    const productWithID = await Product.findById(req.params.id);
    res.status(200).json(productWithID);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

module.exports = app;
