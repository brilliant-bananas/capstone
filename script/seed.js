const { green, red } = require("chalk");
//const db = require("../server/db");
const { db, Budget, User, Category, Transaction } = require("../server/db");

async function seed() {
 try {
    await db.sync({ force: true });
    const users = await Promise.all([
      User.create({
      firstName: "Jessica",
      lastName: "Cotrina",
      email: "jessi@gmail.com",
      password: "1234",
    }),
    User.create({
      firstName: "Julissa",
      lastName: "Napoletano",
      email: "julissa@gmail.com",
      password: "1234",
    }),
    User.create({
      firstName: "Cathy",
      lastName: "Sun",
      email: "cathy@gmail.com",
      password: "1234",
    }),
    User.create({
      firstName: "Torrel",
      lastName: "Jeremiah",
      email: "torrel@gmail.com",
      password: "1234",
    }),
    User.create({
      firstName: "Yuliya",
      lastName: "Maroz",
      email: "yuliya@gmail.com",
      password: "1234",
    }),
  ]);
 
  const budgets = await Promise.all([
    Budget.create({
      amount: 100,
      period: "monthly",
    }),
    Budget.create({
      amount: 500,
      period: "monthly",
    }),
    Budget.create({
      amount: 1000,
      period: "monthly",
    }),
    Budget.create({
      amount: 300,
      period: "monthly",
    }),
  ]);
 
const categories = await Promise.all([
    Category.create({
      name: "Groceries",
      imageUrl:
        "https://www.flaticon.com/svg/static/icons/svg/2921/2921829.svg",
    }),
    Category.create({
      name: "Mortage",
      imageUrl:
        "https://www.flaticon.com/svg/static/icons/svg/1040/1040988.svg"

    }),
    Category.create({
      name: "Food & Dining",
      imageUrl:
       "https://www.flaticon.com/svg/static/icons/svg/1999/1999067.svg"
        
    }),
    Category.create({
      name: "Home Phone",
      imageUrl: "https://www.flaticon.com/svg/static/icons/svg/2829/2829733.svg"

    }),
    Category.create({
      name: "Utilities",
      imageUrl: "https://www.flaticon.com/svg/static/icons/svg/270/270644.svg"
    }), 
    Category.create({
      name: "Entertainment",
      imageUrl: "https://www.flaticon.com/svg/static/icons/svg/3163/3163508.svg"
    })   
  ]);

  const budgets = await Promise.all([
    Budget.create({
      total: 100,
      remaining: 80,
      period: "monthly",
      userId: 1,
      categoryId: 1,
    }),
    Budget.create({
      total: 200,
      remaining: 150,
      period: "annual",
      userId: 2,
      categoryId: 2,
    }),
  ]);

  const transactions = await Promise.all([
    Transaction.create({
      amount: 50,
      storeName: "wallmart",
      userId: 1,
      categoryId: 1,
    }),
    Transaction.create({
      amount: 50,
      storeName: "New York restaurant",
      userId: 2,
      categoryId: 2,
    }),
    Transaction.create({
      amount: 100,
      storeName: "target",
    }),
    Transaction.create({
      amount: 200,
      storeName: "homedepot",
    }),
    Transaction.create({
      amount: 200,
      storeName: "staples",
    }),
    Transaction.create({
      amount: 200,
      storeName: "BP Gas",
    }),
    Transaction.create({
      amount: 50,
      storeName: "wallmart",
    }),
    Transaction.create({
      amount: 50,
      storeName: "wallmart",
    }),
    Transaction.create({
      amount: 50,
      storeName: "wallmart",
    }),
    Transaction.create({
      amount: 50,
      storeName: "wallmart",
    }),
    Transaction.create({
      amount: 50,
      storeName: "wallmart",
    }),
    Transaction.create({
      amount: 50,
      storeName: "wallmart",
    }),
 ]);
} catch (err){
    console.log(red(err))
  }
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    // await db.close();
    // console.log("db connection closed");
  }
}
if (module === require.main) {
  runSeed();
}

module.exports = seed;
