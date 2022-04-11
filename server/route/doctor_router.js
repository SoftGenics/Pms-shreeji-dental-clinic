const express =require('express');
const route=express.Router();
const controller=require('../controller/doctor_controller');
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
 route.post('/api/addDoctor', upload.single('profile'), (req, res, next) => {
 const profile=req.file?.filename;
 
 const firstname=req.body.firstname;
 const lastname=req.body.lastname;
 const email=req.body.email;
 const gender=req.body.gender;

 const P_number=req.body.P_number;
 const w_number=req.body.w_number;
 const address=req.body.address;
const t_experience=req.body.t_experience;
const Specialization=req.body.Specialization;
 
 
 var sql="INSERT INTO doctor VALUES ?";
 const values=[[null,firstname,lastname,email,gender,P_number,w_number,address,t_experience,Specialization,profile]];
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
route.get('/api/allDoctor',controller.find);
route.get('/api/Doctor/:id',controller.find_data);

// edit doctor
route.put('/api/updateDoctor/:id',controller.update);
// Delete doctor
route.delete('/api/deleteDoctor/:id',controller.delete);

     module.exports = route