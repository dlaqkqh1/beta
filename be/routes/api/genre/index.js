var express = require('express');
var createError = require('http-errors');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req, res, next) {
  var data = req.query.genre;
  try{
    fs.writeFileSync('test.txt', data, 'utf-8');
  }catch(e){
    console.log(e);
  }
while (1)
{
  var data = fs.readFileSync('result.txt', 'utf-8');
  if (data != ''){
    res.send(data);
    try{
      fs.writeFileSync('result.txt', '', 'utf-8');
    }catch(e){
      console.log(e);
    }
    break;
  }
}
});




router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;
