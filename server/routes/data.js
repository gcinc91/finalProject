const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Clase = require("../models/Clase");
const mongoose = require("mongoose");

router.post("/users", (req, res) => {
  console.log("llega al back");
  const filter = req.body.filter;
  User.find({
    selectedOptionDeveloper: {
      $elemMatch: { value: filter }
    }
  })
    .then(user => res.json({ user }))
    .catch(e => "error del back, llamada a users " + e);
});

router.post("/allusers", (req, res) => {
  User.find({})
    .then(user => res.json({ user }))
    .catch(e => "error del back, llamada a users " + e);
});

router.post("/newclase", (req, res) => {
  const date = req.body.date;
  const description = req.body.description;

  if (date === null || description === "") {
    return;
  }

  const Clasedata = new Clase({
    date,
    description
  });

  Clasedata.save()
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => {
      console.log("error del cathc clasedata back");
      console.log(err);
    });
});

router.post("/user/:id", (req, res) => {
  let {id} = req.body;
  console.log(id);
  User.findById(id).then(user =>  res.json( user ))
    .catch(e => "error del back, llamada a users " + e);
});

module.exports = router;
