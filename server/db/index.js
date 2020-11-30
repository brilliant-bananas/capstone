const db = require("./db");
const User = require("./user");
const Category = require("./category");
const Transaction = require("./transaction");
const Budget = require("./budget");
const seed = require("./seed");

// associations here

module.exports = {
  db,
  seed,
  models: {
    User,
    Category,
    Transaction,
    Budget,
  },
};
