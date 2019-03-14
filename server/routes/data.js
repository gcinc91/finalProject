const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Clase = require("../models/Clase");
const { regularExp } = require("../lib/helper");
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
  const idProfe = req.body.idProfe;
  const idUserLogin = req.body.idUserLogin;

  if (date === null || description === "") {
    return res.json({ message: "Tienes que poner fecha, hora  y descripcion" });
  }

  const Clasedata = new Clase({
    date,
    description,
    id_user_teacher: idProfe,
    id_user_alumni: idUserLogin
  });

  Clasedata.save()
    .then(data => {
      res.json({ message: "Clase guardada correctamente" });
    })
    .catch(err => {
      console.log("error del cathc clasedata back");
      console.log(err);
    });
});

router.post("/user/:id", (req, res) => {
  let { id } = req.body;
  User.findById(id)
    .then(user => res.json(user))
    .catch(e => "error del back, llamada a users " + e);
});

router.post("/impartirClases", (req, res) => {
  let { id } = req.body;
  Clase.find({ id_user_teacher: id })
    .then(clase => res.json(clase))
    .catch(e => "error del back, llamada a users " + e);
});

router.post("/tengoAprender", (req, res) => {
  let { id } = req.body;

  Clase.find({id_user_alumni: id})
    .then(clase => {
      res.json(clase);
    })
    .catch(e => "error del back, llamada a users " + e);
});

router.post("/searchTech", (req, res) => {
  let { filter } = req.body;
  console.log(filter);
  const reg = regularExp(filter);

  User.find({
    $or: [
      { username: reg },
      { selectedOptionDeveloper: { $elemMatch: { value: reg, label: reg } } },
      { selectedOptionSysAdmin: { $elemMatch: { value: reg, label: reg } } }
    ]
  })
    .then(user => {
      res.json(user);
    })
    .catch(e => "error del back, llamada a users " + e);
});

module.exports = router;
