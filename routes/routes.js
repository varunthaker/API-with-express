const express = require("express");
const dbConnect = require("../db/connect.js");
const Product = require("../db/models/Product");
const router = express.Router();

//get all Products
router.get("/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const productWithID = await Product.findById(req.params.id);
    res.status(200).json(productWithID);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
