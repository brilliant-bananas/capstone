const express = require("express");
const router = express.Router();
const { Budget } = require("../server/db/");

//views here

// GET: budget/
router.get("/", async (req, res, next) => {
  try {
    const budgets = await Budget.findAll();
    res.send(budgets);
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

module.exports = router;
