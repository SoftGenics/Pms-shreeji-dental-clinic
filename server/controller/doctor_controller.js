const res = require('express/lib/response');
const db=require('../database/connection');
const fs=require('fs');
const  multer=require('multer');
const path = require('path');
const { profile } = require('console');

  

exports.find=(req,res)=>{
    var sql="SELECT *FROM doctor";
    db.query(sql,(err,results)=>{
        if(err) throw err
res.send(results);
    })
}
// view profile
exports.find_data=(req,res)=>{
    var sql="SELECT *FROM doctor WHERE id=?";
    db.query(sql,[req.params.id],(err,results)=>{
        if(err) throw err
    
res.send(results);
    })
}

exports.delete=(req,res)=>{
  
    var sql="DELETE FROM doctor WHERE id=?";
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

exports.update=(req,res)=>{
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const email=req.body.email;
    const gender=req.body.gender;
   
    const P_number=req.body.P_number;
    const w_number=req.body.w_number;
    const address=req.body.address;
   const t_experience=req.body.t_experience;
   const Specialization=req.body.Specialization;
   const id=req.params.id;
    
    var sql=`UPDATE doctor SET firstname="${firstname}",lastname="${lastname}",email="${email}",gender="${gender}",P_number="${P_number}",w_number="${w_number}",address="${address}",t_experience="${t_experience}",specialization="${Specialization}" WHERE id="${id}"` ;
    
    db.query(sql,(err,results)=>{
        if(err) throw err
        res.send(results);
    })
}