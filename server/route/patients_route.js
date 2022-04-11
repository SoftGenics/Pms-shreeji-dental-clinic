const express =require('express');
const route=express.Router();
const controller=require('../controller/patient_controller');
 

 
 // patients visit 
 route.post('/api/patients',controller.create);
 
// view data
route.get('/api/allpatient',controller.find);
// today data
route.get('/api/todayPatient',controller.current_date);
//Update record
route.put('/api/updatePatient/:id',controller.update);
// delete
route.delete('/api/deletepatient/:id',controller.delete);

     module.exports = route