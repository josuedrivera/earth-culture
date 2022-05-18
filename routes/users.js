const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');
const user = require('../models/user');

// router.route('/about')
//     .get(users.renderAbout)
//     .post(catchAsync(users.about));

// router.get('/new', isLoggedIn, products.renderNewForm)
// router.get('/about', users.renderAbout)
// router.get('/about', catchAsync(users.renderAbout))


router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

router.get('/logout', users.logout)

module.exports = router;