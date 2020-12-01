const db = require("../server/db");
const { Budget, User, Category, Transaction } = require("../server/db");

async function seed() {
  const users = await Promise.all([
    User.create({
      firstName: "Jessica",
      lastName: "Cotrina",
      email: "jessi@gmail.com",
      password: "1234",
    }),
    User.create({
      firstName: "Michael",
      lastName: "Welch",
      email: "michael@gmail.com",
      password: "1234",
    }),
  ]);

  const categories = await Promise.all([
    Category.create({
      name: "groceries",
      imageUrl:
        "https://www.flaticon.com/svg/static/icons/svg/2921/2921829.svg",
    }),
    Category.create({
      name: "restaurant",
      imageUrl:
        "https://www.flaticon.com/svg/static/icons/svg/2934/2934069.svg",
    }),
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
  ]);
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
