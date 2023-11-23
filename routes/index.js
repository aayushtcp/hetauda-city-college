var express = require('express');
var router = express.Router();
const e = require('express');
// const nodemailer = require('nodemailer');

// importing fomr model
// const FormModel = require("./form")
// const CommentModel = require("./comment")



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



// comment form
router.post('/newsandevent/:eventName', async (req, res) => {
  const eventName = req.params.eventName;
  const newsEvent = newsandeventsData.find(event => event.url === eventName);

  if (!newsEvent) {
    res.status(404).render('error', { message: 'Event not found' });
    return;
  }

  try {
    const { username, comment } = req.body;
    const newComment = new CommentModel({ username, comment });

    // Save the comment to the database
    await newComment.save();



    // Redirect to the same page after the comment is saved
    const redirectUrl = `/newsandevent/${eventName}`;
    res.redirect(redirectUrl);


  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
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
  else {
    res.render('aboutTemplate', aboutContent);

  }

});





// comment submit code is here
router.post('/comment', async (req, res) => {
  try {
    const { username, comment } = req.body;
    const newComment = new CommentModel({ username, comment });
    await newComment.save();

    // Send a success response

    res.send("Comment Submitted !");
  } catch (error) {
    console.error(error);

    // Send an error response
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});








// // form submit code is here
// // Configure nodemailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: '', // replace with your Gmail email address
//     pass: '' // replace with your Gmail password
//   }
// });

// // POST route for form submission
// router.post('/submit', async function (req, res, next) {
//   const fullName = req.body.fullname;
//   const email = req.body.email;
//   const message = req.body.message;
//   const subject = req.body.subject;



//   // Send email using nodemailer
//   try {



//     const formEntry = new FormModel({
//       fullname: req.body.fullname,
//       email: req.body.email,
//       message: req.body.message,
//       subject: req.body.subject,
//     });
//     await formEntry.save();


//     // aile chai mail sent hunna tara database ma chai aauxa

//     await sendEmail(fullName, email, message, subject);
//     res.render('success')
//   } catch (error) {
//     console.error(error);
//     // res.render('submitted', { username, password, emailSent: false });
//     res.render('error');
//   }
// });

// // Function to send email
// async function sendEmail(fullName, email, message, subject) {
//   const mailOptions = {
//     from: '', // replace with your Gmail email address
//     to: ``, // replace with the recipient's email address
//     subject: 'Hetauda City College Form Request',
//     text: `Full Name: ${fullName}\Email: ${email}\nMessage: ${message}\n Subject: ${subject}r`,
//   };

//   await transporter.sendMail(mailOptions);
// }







module.exports = router;
