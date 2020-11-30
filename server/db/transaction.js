const Sequelize = require("sequelize");
const db = require("./db");

const Transaction = db.define("transaction", {
  amount: {
    type: Sequelize.DECIMAL(10, 2),
    validate: {
      min: 0,
    },
  },
  storeName: {
    type: Sequelize.STRING,
  },
});

module.exports = Transaction;
