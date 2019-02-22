const express = require("express");
const router = express.Router();
const User = require("../models/User");



router.get("/data/users", (req, res) => {
  console.log('llega al back')
  const {s} = req;
  console.log(filters)
  res.status(200).json({succes: "Todo guay en el back"})
  //User.find( { selectedOptionDeveloper : })
  
});



module.exports = router;