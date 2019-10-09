const fs = require("fs"); 
// 写入
// fs.writeFile("./index.js",data,(err)=>{
//     if(err) throw err;
//     console.log(data);
// });
new Promise(function(resolve,reject){
    fs.readFile("./index.js",(err,data)=>{
        if(err) throw err;
        var filter_a = data.toString().replace(/console\.log\([\w\{'"|.|\|/|,}n\s]+\);?/g, "");
        // console.log(filter_a);
        resolve(filter_a);
    });
}).then((data)=>{
    fs.writeFile("./wf.js",data,(err)=>{
    if(err) throw err;
         console.log("写入成功");
    });
})