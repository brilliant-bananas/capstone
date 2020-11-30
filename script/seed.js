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
  ]);

  const budgets = await Promise.all([
    Budget.create({
      amount: 100,
      period: "monthly",
    }),
  ]);

  const categories = await Promise.all([
    Category.create({
      name: "groceries",
      imageUrl:
        "https://www.flaticon.com/svg/static/icons/svg/2921/2921829.svg",
    }),
  ]);

  const transactions = await Promise.all([
    Transaction.create({
      amount: 50,
      storeName: "wallmart",
    }),
  ]);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    // console.error(err);
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
