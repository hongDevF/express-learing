const path = require("path");
const rootDir = require('../utils/path');
const Router = require("express").Router();

Router.get("/add", (req, res) => {
  res.sendFile(path.join(rootDir, 'views','add-product.html'));
});

const products = [];

Router.post("/product", (req, res) => {
  // console.log(req.body);
  products.push({title: req.body.title});
  res.redirect("/shop");
});

exports.routes = Router;
exports.products = products;
