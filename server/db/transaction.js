const Sequelize = require("sequelize");
const db = require("./db");

const Transaction = db.define("transaction", {
  type: {
    type: Sequelize.ENUM("cash", "receipt"),
    defaultValue: "cash",
  },
  amount: {
    type: Sequelize.DECIMAL(10, 2),
    validate: {
      min: 0,
    },
  },
  storeName: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.DATE,
  },
});

module.exports = Transaction;
