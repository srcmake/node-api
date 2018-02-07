var express = require('express');
var router = express.Router();

var fruits = require('../controllers/fruits');

/* Handle each API function. */

router.post('/fruits/add', fruits.add);
router.post('/fruits/subtract', fruits.subtract);
router.get('/fruits/check', fruits.check);

module.exports = router;
