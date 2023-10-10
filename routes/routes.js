const express = require("express");
const Product = require("../db/models/Product.js");
const dbConnect = require("../db/connect.js");
const router = express.Router();

//get all Products
router.get("/products", async (req, res) => {
  console.log(Product);
  try {
    const allProducts = await Product.find();
    console.log(allProducts);
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/products/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    const productWithID = await Product.findById(req.params.id);
    console.log(productWithID);
    res.status(200).json(productWithID);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
