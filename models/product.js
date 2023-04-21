const products = [];
const fs = require("fs");
const path = require("path");
// const path = require("../utils/path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      console.log(fileContent);
    });
  }
  static fetchAll() {
    return products;
  }
};
