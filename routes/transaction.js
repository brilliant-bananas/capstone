const express = require("express");
const router = express.Router();
const { Transaction } = require("../server/db/");

//views here

// GET: transactions/
router.get("/", async (req, res, next) => {
  try {
    const transactions = await Transaction.findAll();
    res.send(transactions);
  } catch (error) {
    next(error);
  }
});

// POST: transaction/
router.post("/", async (req, res, next) => {
  try {
    const newTransaction = await Transaction.create(req.body);
    res.send(newTransaction);
  } catch (error) {
    next(error);
  }
});

// DELETE: transactions/:transactionId
router.delete("/:transactionId", (req, res, next) => {
  try {
    Transaction.destroy({
      where: {
        id: req.params.transactionId,
      },
    });
  } catch (error) {
    next(error);
  }
});

// POST: transactions/:transactionId
router.put("/:transactionId", async (req, res, next) => {
  try {
    const updatedTransaction = await transaction.findByPk(
      req.params.transactionId
    );
    await updatedTransaction.update(req.body);
    res.send(updatedTransaction);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
