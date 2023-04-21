const path = require("path");
const epxress = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const errorController = require('./controller/err');
const app = epxress();


app.use(bodyParser.urlencoded());
app.use(epxress.static(path.join(__dirname, "public")));

const adminRouter = require("./router/admin");
const shopRouter = require("./router/shop");

app.use("/admin", adminRouter);
app.use("/shop", shopRouter);
// error router a
app.use(errorController.get404);

const port = 8000;
app.listen(port, () => {
  console.log("http://localhost:" + port);
});
