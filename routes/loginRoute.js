const express = require("express");
const login = express.Router();
const User = require('../Models/userModel')

login.post('/login', async (req,res)=>{
    const{email,password}=req.body

    try {

        const user = await User.find({email,password})

        if(user.length>0){
            const currentUser={
                name:user[0].name,
                email:user[0].email,
                isAdmin:user[0].isAdmin,
                _id:user[0]._id
            }
            res.send(currentUser)
        }else{
            return res.status(404).json({message:"user login falied"})
        }
        
    } 
    catch (error) {
        return res.status(404).json({message:"something went wrong"})
    }

})

module.exports=login;
