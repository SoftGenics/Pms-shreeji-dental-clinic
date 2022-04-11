
const res = require('express/lib/response');
const db=require('../database/connection');

const  multer=require('multer');
const path = require('path');
const fs=require('fs');
  

exports.find=(req,res)=>{
    var sql="SELECT *FROM patients";
    db.query(sql,(err,results)=>{
        if(err) throw err
res.send(results);
    })
}

exports.create=(req,res)=>{
    const name=req.body.name;
 const email=req.body.email;
 const gender=req.body.gender;
const age=req.body.age;
 const P_number=req.body.P_number;

 const address=req.body.address;
 const category=req.body.category;
 const problem=req.body.problem;
const issue=req.body.issue;
const visit_date=req.body.visit_date
 
 
 var sql="INSERT INTO patients VALUES ?";
 const values=[[null,name,email,gender,age,P_number,address,category,problem,issue,visit_date]];
 console.log(values);
 db.query(sql,[values], (err, results,fields)=>{
     if(err){
     console.log(err) }
     {
         console.log("inserted",results );
         res.send(results);
         res.end();
     }
 })

    
}
// Patient Edit
exports.update=(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const gender=req.body.gender;
   const age=req.body.age;
    const P_number=req.body.P_number;
   
    const address=req.body.address;
    const category=req.body.category;
    const problem=req.body.problem;
   const issue=req.body.issue;
   const visit_date=req.body.visit_date
    
   const id=req.params.id;
    
    var sql=`UPDATE patients SET name="${name}",email="${email}",age="${age}",gender="${gender}",P_number="${P_number}",address="${address}",category="${category}",problem="${problem}",issue="${issue}",visit_date="${visit_date}" WHERE id="${id}"` ;
    
    db.query(sql,(err,results)=>{
        if(err) throw err
        res.send(results);
    })
}
//get today  Patients
exports.current_date=(req,res)=>{
    const date=new Date();
    let day=("0"+date.getDate()).slice(-2);
    let month=("0"+date.getMonth()).slice(-2);
    let year =date.getFullYear();
    const current_date=(year+"-"+month+"-"+day);
    console.log(current_date);
    var sql="SELECT *FROM patients where visit_date=?";
    db.query(sql,[current_date],(err,results)=>{
        if(err) throw err
res.send(results);
    })
}

// delete 
exports.delete=(req,res)=>{
    var sql="SELECT *FROM patients WHERE id=?";
db.query(sql,[req.params.id],(err,results)=>{
    if(err) throw err
    res.send(results);
})
}


   