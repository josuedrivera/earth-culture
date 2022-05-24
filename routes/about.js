const express = require('express');
const router = express.Router();
// const passport = require('passport');
// const catchAsync = require('../utils/catchAsync');

// const about = require('../controllers/about');
// const About = require('../models/about');





// router.route('/about')
//     .get(users.renderAbout)
//     .post(catchAsync(users.about));

// router.get('/new', isLoggedIn, products.renderNewForm)
router.get('/about', (req, res) => {
    res.render('../about');
})

// router.get('/about', isLoggedIn, about.renderAbout)

// router.get('/about', about.renderAbout)
// router.get('/about', catchAsync(users.renderAbout))


module.exports = router;