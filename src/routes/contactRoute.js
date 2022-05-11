const express = require ('express');
const contactController = require ('../controllers/contactController');
const router = express.Router();


router.get('/',contactController.contact);


module.exports = router;