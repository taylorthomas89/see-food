var express = require('express');
var router = express.Router();

var seefoodController = require('../controllers/seefood-controller');

/* GET home page. */
router.get('/', seefoodController.processImage);

module.exports = router;
