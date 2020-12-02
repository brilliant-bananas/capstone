//const Sequelize = require("sequelize");

const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../../package.json')


//new code

const dbName = process.env.NODE_ENV === 'test' ? `${pkg.name}-test` : pkg.name
console.log(chalk.yellow(`Opening database connection to ${dbName}`))

const db = new Sequelize(`postgres://localhost:5432/${dbName}`, {
  logging: false,
})

module.exports = db




// const db = new Sequelize(
//   process.env.DATABASE_URL || "postgres://localhost:5432/capstone",
//   {
//     logging: false,
//   }
// );

// module.exports = db;


