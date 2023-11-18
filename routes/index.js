var express = require('express');
var router = express.Router();

const aboutUscontentData = require("../views/content/aboutuscontent")
const hsebContentData = require("../views/content/hsebcontent")
const bachelorContentData = require("../views/content/bachelor")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
});

/* GET contat page. */
router.get('/contact', function (req, res, next) {
  res.render('contact')
});



// Consolidated route for about and programs page
router.get("/:changableRoutes", function (req, res) {
  const changableRoutes = req.params.changableRoutes;

  const hsebContent = hsebContentData[changableRoutes];
  const aboutContent = aboutUscontentData[changableRoutes];
  const bachelorContent = bachelorContentData[changableRoutes];

  if (!hsebContent && !aboutContent && !bachelorContent) {
    // Handle unknown section (e.g., show a 404 page)
    res.status(404).render('error', { message: 'Page not found' });
    return;
  }

  if (hsebContent) {
    res.render('hseb', hsebContent);
  }
  else if (bachelorContent) {
    res.render('bachelor', bachelorContent)

  }
  else {
    res.render('aboutTemplate', aboutContent);

  }

});







module.exports = router;
