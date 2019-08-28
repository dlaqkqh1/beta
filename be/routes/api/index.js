var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */


router.use('/genre', require('./genre'));
router.use('/title', require('./title'));

router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;
