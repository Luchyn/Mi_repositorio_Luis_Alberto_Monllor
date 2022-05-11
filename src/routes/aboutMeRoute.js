const express = require('express');
const aboutMeController = require('../controllers/aboutMeController');
const router = express.Router();


router.get('/',aboutMeController.about);


module.exports = router;