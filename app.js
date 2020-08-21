const express = require("express");
const YamlValidator = require("yaml-validator");
const app = express();

// Routes which should handle request
const options = {
  log: false,
  structure: false,
  onWarning: null,
  writeJson: false,
};

const files = ["test.yaml"];

app.get("/orders", (req, res, next) => {
  alert(files);
  const validator = new YamlValidator(options);
  alert(files);
  let op = validator.validate(files);
  validator.report();
  console.log(op);
  res.json([op]);
});

//export app
module.exports = app;
