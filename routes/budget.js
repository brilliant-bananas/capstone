const express = require("express");
const router = express.Router();
const { Budget } = require("../server/db/");

//views here
const { budget } = require("../public/views");

// GET: budget/
router.get("/", async (req, res, next) => {
  try {
    const budgets = await Budget.findAll();
    res.send(budget(budgets));
  } catch (error) {
    next(error);
  }
});

// POST: budget/
router.post("/", async (req, res, next) => {
  try {
    const newBudget = await Budget.create(req.body);
    res.send(newBudget);
  } catch (error) {
    next(error);
  }
});

// DELETE: budget/:budgetId
router.delete("/:budgetId", (req, res, next) => {
  try {
    Budget.destroy({
      where: {
        id: req.params.budgetId,
      },
    });
  } catch (error) {
    next(error);
  }
});

// POST: budget/:budgetId
router.put("/:budgetId", async (req, res, next) => {
  try {
    const updatedBudget = await Budget.findByPk(req.params.budgetId);
    await updatedBudget.update(req.body);
    res.send(updatedBudget);
  } catch (error) {
    next(error);
  }
});

// GET budget by annual period
router.get("/annual", async (req, res, next) => {
  try {
    // const userId = await req.user.dataValues.id;
    const budgets = await Budget.findAll({
      where: {
        period: "annual",
        // userId: userId,
      },
    });
    res.send(budgets);
  } catch (error) {
    next(error);
  }
});

// GET budget by monthly period
router.get("/monthly", async (req, res, next) => {
  try {
    // const userId = await req.user.dataValues.id;
    const budgets = await Budget.findAll({
      where: {
        period: "monthly",
        // userId: userId,
      },
    });
    res.send(budgets);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
