var express = require('express');
var router = express.Router();
var request = require('request');
var qs = require("qs");

/* GET home page. */
router.get('/', function(req, res, next) {
  request("https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/0-20.html", function (error, response, body){
      // error?console.log(error):res.send(qs.parse(body));
     res.send(body.split("artiList(")[1].split(")")[0]);
  })
});

module.exports = router;
