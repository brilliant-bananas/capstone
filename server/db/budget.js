const Sequelize = require("sequelize");
const db = require("./db");

const Budget = db.define("budget", {
  total: {
    type: Sequelize.DECIMAL(10, 2),
    validate: {
      min: 0,
    },
  },
  remaining: {
    type: Sequelize.DECIMAL(10, 2),
    validate: {
      min: 0,
    },
  },
  period: {
    type: Sequelize.ENUM("monthly", "annual"),
    defaultValue: "monthly",
  },
  exceed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Budget;
