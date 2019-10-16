const MongoClient = require("mongodb").MongoClient;
const assert = require('assert');

const url = "mongodb://localhost:27017";

const dbName = "nwwjrtt";

const connect = () =>{
    return new Promise((resovle,reject)=>{
        MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},function(err,client){
            assert.equal(null,err);
            err?reject(err):resovle(client);
        })
    })
}

const insert = (col,query)=>{
    return new Promise( async(resolve,reject)=>{
        const client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.insertMany(query,function(err,result){
            err?reject(err):resolve(result);
        })
    })
}
const find = (col,query)=>{
    return new Promise(async (resolve,reject)=>{
        const client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.find(query?query:{}).toArray(function(err,docs){
            err?reject(err):resolve(docs);
        })
        client.close();
    })
}
const findcol = (col,query,low,gow)=>{
    return new Promise(async (resolve,reject)=>{
        const client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.find(query ? query : {}).limit(low).skip(gow).toArray(function (err, docs) {
            err?reject(err):resolve(docs);
        })
        client.close();
    })
}
module.exports = {
    insert,
    find,
    findcol
}