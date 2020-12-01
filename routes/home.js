const express = require("express");
const router = express.Router();
const { home } = require("../public/views");

// /home
router.get("/", async (req, res, next) => {
  try {
    res.send(home());
  } catch (error) {
    next(error);
  }
});
module.exports = router;
