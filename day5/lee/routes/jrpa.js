const request = require("request");
const {insert,find} = require("./db.js");
// request("https://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A185AD7A02FF902&cp=5DA22FD930629E1&min_behot_time=1570958810&_signature=NwkdbAAAarLf0z8Rl6NdyjcJHX&i=1570952510",
// function(err,res,body){
//    let newdata =  JSON.parse(body).data;
//    newdata.forEach(function(item,index){
//        console.log(index);
    //    console.log(item.title);
    //    console.log(item.abstract);
    //    console.log(item.image_list);
//     (async ()=>{
//         await insert("toutiao",[{
//             title:item.title,
//             abstract: item.abstract,
//             imgurl: item.image_list
//         }])
//     })()
//    })
// })
// (async ()=>{
//     let arr =  await find("toutiao");
//     console.log(arr.length);
// })();
