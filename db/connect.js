const mongoose = require("mongoose");
const config = require("dotenv").config();
const PORT = 3000;
const mongodbURI = process.env.DATABASE_URI;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(mongodbURI);
    console.log("Database Connected");
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = connectMongoDB;
