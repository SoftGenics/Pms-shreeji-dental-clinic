const express =require('express');
const route=express.Router();
const controller=require('../controller/controller_login');
const db=require('../database/connection');




route.post('/admin',controller.admin);
 

   

     module.exports = route