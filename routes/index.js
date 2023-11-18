var express = require('express');
var router = express.Router();

const contentData = require("../views/content/content")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
});

/* GET contat page. */
router.get('/contact', function (req, res, next) {
  res.render('contact')
});

router.get("/:section", function (req, res) {
  const section = req.params.section;
  const content = contentData[section];

  if (!content) {
    // Handle unknown section (e.g., show a 404 page)
    res.status(404).render('error', { message: 'Page not found' });
    return;
  }

  res.render('template', content);
})


module.exports = router;
