const res = require('express/lib/response');
const db=require('../database/connection');

exports.admin=(req,res)=>{
    
 const email=req.body.email;
 const password=req.body.password;
 var sql="SELECT *FROM admin where id='1'"
 
 db.query(sql,(err, results,fields)=>{
     console.log(email,password)

         if(results.password===password){
         console.log("Login Sucessfull",results.password );
         }
         else{
             console.log(" email  and password are not correct");
         }
         res.end();
     
 })

    
}