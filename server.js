
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser=require('body-parser');
const path = require('path');
const cors = require("cors");
const imgRoute=express.Router();
const db=require('./server/database/connection');
const fs=require('fs');
const { count } = require('console');
const { setDefaultResultOrder } = require('dns');

app.use(cors({origin:"*"}));
dotenv.config({path:'config.env'}
)
const PORT=process.env.PORT||8080

//log request
app.use(morgan("tiny"));

// body parser
app.use(bodyparser.urlencoded({extended:true}))

app.use('/uploads', express.static('uploads'));
//

   
var sql="SELECT *from doctor";
db.query(sql,(err,results)=>{
    if(err) throw err
//fs.unlinkSync(`uploads/`)
console.log(results)
})
// set view engine
app.set("view engine","ejs")

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/',require('./server/route/doctor_router'))
app.use('/',require('./server/route/patients_route'))
app.use('/',require('./server/route/enquiry_route'))
app.use('/',require('./server/route/route_login'))
app.use('/',require('./server/route/report_router'))


app.listen(4001, () =>{console.log(`server is running on http://localhost:${PORT}`)});