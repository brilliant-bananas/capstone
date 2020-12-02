const db = require("./db");
const User = require("./user");
const Category = require("./category");
const Transaction = require("./transaction");
const Budget = require("./budget");

// associations here
User.hasMany(Budget);
User.hasMany(Transaction);
Transaction.belongsTo(User, { foreignKey: "userId" });
Budget.belongsTo(User, { foreignKey: "userId" });

Category.hasMany(Budget);
Category.hasMany(Transaction);
Budget.belongsTo(Category, { foreignKey: "categoryId" });
Transaction.belongsTo(Category, { foreignKey: "categoryId" });

module.exports = {
  db,
  User,
  Category,
  Transaction,
  Budget,
};
