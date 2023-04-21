const Product = require('../models/product');
const rootDir = require("../utils/path");
const path = require('path');
exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
const product = new Product(req.body.title);
product.save();
  res.redirect("/shop");
};

exports.getProduct = (req, res) => {
    const products = Product.fetchAll();
  // console.log("shop.js " , adminData.products);
  res.sendFile(path.join(rootDir,'views', 'shop.html'));
//   const products = adminData.products;
//   res.render("shop", { prods: products, docTitle: "Shop" });
};
