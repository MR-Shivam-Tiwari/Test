const express = require("express");
const router = express.Router();
const User = require("../Models/User");

router.post("/newuser", async (req, res) => {
  try {
    User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      location: req.body.location,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
