const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

// const notFound = require("./views/notFound");
// const serverError = require("./views/serverError");

app.use(morgan("dev")); //logging middleware
app.use(express.static(path.join(__dirname, "../public"))); //serving up static files (e.g. css files)
app.use(express.urlencoded({ extended: false })); //parsing middleware for form input data
app.use(express.json());
app.use(require("method-override")("_method"));

app.use("/", require("../routes/camera"));

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});

module.exports = app;
