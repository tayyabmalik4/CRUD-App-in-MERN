
// const User = require('../model/usermodel.js')

import User from '../model/usermodel.js'

export const usercontrol =async (req,res)=>{
    // console.log("API is working perfect")
    const user = req.body;

    // console.log(chkuser);
    const newUser = new User(user);

    try {
        await newUser.save();
        console.log("Data Has been saved SuccessFully")
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({message:error.message})
    }

}

export const getusers = async (req,res) =>{
    try {
        const userdata = await User.find()
        // console.log("Data has been Fatched SuccessFully")
        res.status(200).json(userdata);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const fatchuser = async (req,res) =>{
    // console.log(req.params.id)
    try {
        // const fatchuser = await User.find({_id:req.params.id})
        const fatchuser = await User.findById(req.params.id);
        res.status(200).json(fatchuser);
    } catch (error) {
        response.status(404).json({message:error.message});
        // console.log("Error While Fatching th user ",error)
        
    }
}
export const editUser = async (req,res) =>{
    let userupdate = req.body;
    const editdata = new User(userupdate)
    try {
        await User.updateOne({_id: req.params.id},editdata)
        res.status(201).json(editdata);
    } catch (error) {
        // console.log("Error While Update Query API in Backend" , error)
        res.status(409).json({message: error.message})
        
    }
}

export const deleteUser = async (req,res)=>{
    try {
        await User.deleteOne({_id: req.params.id});
        res.status(200).json({message:"User Deleted SuccessFully"})
    } catch (error) {
        res.status(404).json({message:error.message})
        
    }
}



// module.exports = getusers;
// module.exports = usercontrol;