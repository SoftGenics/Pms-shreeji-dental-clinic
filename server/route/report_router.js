const express =require('express');
const route=express.Router();
const controller=require('../controller/report_controller');
const  multer=require('multer');
const path = require('path');
const db=require('../database/connection');



// insert data

 
 
 
 // add report
 route.post('/api/report',(req, res) => {
 
 const name=req.body.name;
 const age=req.body.age;
 const sex=req.body.sex;
 
 const disc=req.body.disc;
 const date=req.body.date;
 
 var sql="INSERT INTO report VALUES ?";
 const values=[[null,name,age,sex,disc,date]];
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
 });
   
//view data
route.get('/api/report',controller.find);
route.get('/api/report/:id',controller.find_data);

// edit doctor
//route.put('/api/updatereport/:id',controller.update);
// Delete doctor
route.delete('/api/deletereport/:id',controller.delete);

     module.exports = route