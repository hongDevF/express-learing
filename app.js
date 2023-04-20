const path = require("path");
const epxress = require("express");
const bodyParser = require("body-parser");
const app = epxress();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded());
app.use(epxress.static(path.join(__dirname, "public")));

const adminRouter = require("./router/admin");
const shopRouter = require("./router/shop");

app.use("/admin", adminRouter.routes);
app.use("/shop", shopRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});


const port = 3000;
app.listen(port, () => {
  console.log("http://localhost:" + port);
});
