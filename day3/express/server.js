const express = require('express');
const app = express();
app.get('/',function(req,res){
    res.send("你好!!!")
});
app.post('/home',function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.send("home")
});
app.listen(4000);