var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    if(req.body.username == "abc123" && req.body.psw == "123456"){
        res.send("登录成功");
    }else{
        res.send("登录失败");
    }
});

module.exports = router;