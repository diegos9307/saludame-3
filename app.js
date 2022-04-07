"use strict";
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.use("/", express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  res.status(200).send(`<h1>Hola ${req.body.name}!<h1/>`);
});

app.listen(3000, () => console.log("running in port 3000"));
