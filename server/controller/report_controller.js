const res = require('express/lib/response');
const db=require('../database/connection');
const fs=require('fs');
const path = require('path');
const { profile } = require('console');

  

exports.find=(req,res)=>{
    var sql="SELECT *FROM report";
    db.query(sql,(err,results)=>{
        if(err) throw err
res.send(results);
    })
}
// view particuler report
exports.find_data=(req,res)=>{
    var sql="SELECT *FROM report WHERE id=?";
    db.query(sql,[req.params.id],(err,results)=>{
        if(err) throw err
    
res.send(results);
    })
}
//delete report

exports.delete=(req,res)=>{
  
    var sql="DELETE FROM report WHERE id=?";
db.query(sql,[req.params.id],(err,results)=>{
    
    var sql="SELECT profile from doctor ";
    db.query(sql,(err,results)=>{
        if(err) throw err
        fs.unlinkSync();
    })


    if(err) throw err
        res.send(results);
})
}
