var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
});
router.get("/drop", function (res, res) {
  res.render('hello');
})

module.exports = router;
