const express = require("express");
const router = express.Router();
const {findcol} = require('./db.js');
router.get('/',function(req,res,next){
    let num = parseInt(req.query.num);
    if(num>96){
        num = 76;
    }
    (async ()=>{
        let arr = await findcol("toutiao", {}, 20, num);
        res.send(arr);
    })()
})
module.exports =  router;