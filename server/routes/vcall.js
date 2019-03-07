const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('vcall/callIncoming');
});


router.get('/vcall/:id', (req, res, next) => {
  console.log('aqui se esta metiendo')
  res.render('vcall/callIncoming');
});

module.exports = router;
