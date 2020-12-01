const express = require("express");
const router = express.Router();
const { User } = require("../server/db/");
const { login, home } = require("../public/views");

router.post("/", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.send(home());
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    res.send(login());
  } catch (error) {
    next(error);
  }
});
module.exports = router;
