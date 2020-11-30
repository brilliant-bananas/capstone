const db = require("./db");
const User = require("./user");
const Category = require("./category");
const Transaction = require("./transaction");
const Budget = require("./budget");
const seed = require("../../script/seed");

// associations here
User.hasMany(Budget);
User.hasMany(Transaction);
Transaction.belongsTo(User);
Budget.belongsTo(User);

Budget.belongsTo(Category);
Transaction.belongsTo(Category);

module.exports = {
  db,
  seed,

  User,
  Category,
  Transaction,
  Budget,
};
