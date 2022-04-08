"use strict";
const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));

app.set(
  ".hbs",
  hbs.engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    defaultLayout: "main",
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

// app.use("/", express.static(path.join(__dirname, "public")));

app.post("/", (req, res) => {
  res.status(200).send(`<h1>Hola ${req.body.name}!<h1/>`);
});

app.listen(3000, () => console.log("running in port 3000"));
