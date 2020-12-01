const express = require("express");
const router = express.Router();
const { Category } = require("../server/db/");
//views here

// GET: category/
router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.send(categories);
  } catch (error) {
    next(error);
  }
});

// POST: category/
router.post("/", async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    res.send(newCategory);
  } catch (error) {
    next(error);
  }
});

// DELETE: category/:categiryId
router.delete("/:categoryId", (req, res, next) => {
  try {
    Category.destroy({
      where: {
        id: req.params.categoryId,
      },
    });
  } catch (error) {
    next(error);
  }
});

// POST: category/:categoryId
router.put("/:categoryId", async (req, res, next) => {
  try {
    const updatedCategory = await Budget.findByPk(req.params.categoryId);
    await updatedCategory.update(req.body);
    res.send(updatedCategory);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
