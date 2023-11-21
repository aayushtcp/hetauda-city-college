var express = require('express');
var router = express.Router();
const e = require('express');



const aboutUscontentData = require("../views/content/aboutuscontent")
const hsebContentData = require("../views/content/hsebcontent")
const bachelorContentData = require("../views/content/bachelor");

// const staffContentData = require("../views/content/staffcontent")

const newsandeventsData = require("../public/json/newsandevent.json")

const facultyContentData = require("../public/json/facultyandstaff.json")



// each staf
router.get("/facultyandstaffs/:staffname", function (req, res, next) {
  const staffname = req.params.staffname;
  const newsEvent = facultyContentData.find(event => event.username === staffname);

  if (!newsEvent) {
    // Handle unknown event (e.g., show a 404 page)
    res.status(404).render('error', { message: 'Event not found' });
    return;
  }

  res.render('eachstaff', newsEvent);
});




// news and data 
router.get("/newsandevent/:eventName", function (req, res, next) {
  const eventName = req.params.eventName;
  const newsEvent = newsandeventsData.find(event => event.url === eventName);

  if (!newsEvent) {
    // Handle unknown event (e.g., show a 404 page)
    res.status(404).render('error', { message: 'Event not found' });
    return;
  }

  res.render('eachnewsandevent', newsEvent);
});

// galary 
router.get("/galary", function (req, res) {
  res.render("galary")
})



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
});



/* GET contat page. */
router.get('/contact', function (req, res, next) {
  res.render('contact')
});



router.get("/newsandevent", function (req, res, next) {
  res.render("newsandevent")
});



// Consolidated route for about and programs page
router.get("/:changableRoutes", function (req, res) {
  const changableRoutes = req.params.changableRoutes;

  const hsebContent = hsebContentData[changableRoutes];
  const aboutContent = aboutUscontentData[changableRoutes];
  const bachelorContent = bachelorContentData[changableRoutes];
  // const staffContent = staffContentData[changableRoutes]



  if (!hsebContent && !aboutContent && !bachelorContent && !staffContent) {
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
  // else if (staffContent) {
  //   res.render('eachstaff', staffContent)
  // }
  else {
    res.render('aboutTemplate', aboutContent);

  }

});








module.exports = router;
