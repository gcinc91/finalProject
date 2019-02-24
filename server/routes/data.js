const express = require("express");
const router = express.Router();
const User = require("../models/User");
const mongoose = require("mongoose");

router.post("/users", (req, res) => {
  console.log("llega al back");
  const filter = req.body.filter;
  User.find({
    selectedOptionDeveloper: {
      $elemMatch: { value: filter}
    }
  })
    .then(user => res.json({user}))
    .catch(e => "error del back, llamada a users " + e);
});

router.post("/allusers", (req, res) => {
  User.find({})
    .then(user => res.json({user}))
    .catch(e => "error del back, llamada a users " + e);
});

module.exports = router;
