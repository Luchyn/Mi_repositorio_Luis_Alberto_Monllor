
const express = require('express');
const worksController = require('../controllers/worksController');
const router = express.Router();

router.get('/',worksController.works);


module.exports = router;