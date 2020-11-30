const Sequelize = require("sequelize");
const db = require("./db");

const Budget = db.define("budget", {
  amount: {
    type: Sequelize.DECIMAL(10, 2),
    validate: {
      min: 0,
    },
  },
  period: {
    type: Sequelize.ENUM("weekly", "monthly", "annual"),
    defaultValue: "weekly",
  },
  exceed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Budget;
