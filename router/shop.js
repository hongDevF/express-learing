const express = require("express");
const productController = require("../controller/products");
const Router = express.Router();

Router.get("/", productController.getProduct);

module.exports = Router;
