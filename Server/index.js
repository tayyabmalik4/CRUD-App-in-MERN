
import express from 'express'
import connection from './database/db.js';
import Routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

// const connection = require('./database/db.js')
// const Routes = require('./routes/route.js')
// const express = require('express')
// const cors = require('cors')
// const bodyparser = require('body-parser')

const app = express();


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/',Routes );

const port = 4000;

// app.get('/',(req,res)=>{
//     res.send("Server Connected")
// })

// when we created cluster of mongodb then we can't write the cridentials in coding
// so we save the credientials in .env file and for using .env file we follow these steps
// first install the dotenv pakage than create .env file than write credientials in the .env file and than access anywhere
// import the .env file and using processfunction we use it anywhere which we want
// dotenv.config();
// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;
// connection(username,password)


connection();

app.listen(port,()=>{
    console.log(`Server is running successfully on PORT ${port}`)
})