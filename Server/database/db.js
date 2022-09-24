 import mongoose from "mongoose";

//  const mongoose = require('mongoose')

 const connection = async () =>{
    const URL = 'mongodb://localhost:27017/crud-app';

    try {
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true});
        console.log("Data Base connected SuccessFully");
    } catch (error) {
        console.log("Error while connecting with the database", error)
    }
 } 

 export default connection; 
// module.exports = connection;