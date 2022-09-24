import express from 'express';
import { usercontrol,getusers ,fatchuser,editUser,deleteUser } from '../Controller/userController.js';
// const express = require('express');
// const usercontrol = require('../Controller/userController.js')
// const getusers = require('../Controller/userController.js')

var router = express.Router();

router.post('/adduser', usercontrol);
router.get('/alluser',getusers);
router.get('/:id',fatchuser);
// -------------we use post method as well as put method to update the data
// router.post('/:id',editUser)
router.put('/:id',editUser)
router.delete('/:id', deleteUser)


// router.post('/adduser',()=>{
//     console.log("Post API is Working perfect.");
// })

export default router;
// module.exports = router;