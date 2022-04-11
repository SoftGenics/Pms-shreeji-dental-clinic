const express =require('express');
const route=express.Router();
const controller=require('../controller/enquiry_controller');
const  multer=require('multer');
const path = require('path');
const db=require('../database/connection');



// insert data
var storage = multer.diskStorage({
     destination: function (req, file, cb) {
        cb(null, 'uploads');
     },
     filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
     }
  });
 
  
 
  var upload = multer({ storage: storage });
   
 
 
 
 
 
 // booking
 route.post('/api/users', upload.single('myfile'), (req, res, next) => {
 const myfile=req.file.filename;
 
 const name=req.body.name;
 const email=req.body.email;
 const gender=req.body.gender;
 const date=req.body.date;
 const department=req.body.department;
 const p_number=req.body.p_number;
 const message=req.body.message;
 const c_date=new Date();
 const day=("0"+c_date.getDate()).slice(-2);
 
 
 var sql="INSERT INTO booking VALUES ?";
 const values=[[null,name,email,gender,date,department,p_number,message,myfile,day]];
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
   
//route.post('/api/users',upload.single('myfile'),controller.create);
//view data
route.get('/api/users',controller.find);


   

     module.exports = route