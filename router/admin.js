const path = require("path");
const rootDir = require("../utils/path");
const router = require("express").Router();
const productController = require("../controller/products");

router.get("/add", productController.getAddProduct);

router.post("/product", productController.postAddProduct);

module.exports = router;
