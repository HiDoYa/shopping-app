var express = require('express');
var router = express.Router();
var dirname = "/Users/hidoya/Code/shopping-app/api"


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(dirname + "/dataSend.json")
});

module.exports = router;
