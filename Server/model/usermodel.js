// const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment')

import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment'

const usermodel = mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:String
})

autoIncrement.initialize(mongoose.connection)
usermodel.plugin(autoIncrement.plugin,'user')

const user = mongoose.model('user',usermodel);

// module.exports = user;
export default user;
