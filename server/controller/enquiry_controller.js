const res = require('express/lib/response');
const db=require('../database/connection');

const  multer=require('multer');
const path = require('path');

  

exports.find=(req,res)=>{
    var sql="SELECT *FROM booking";
    db.query(sql,(err,results)=>{
        if(err) throw err
res.send(results);
    })
}