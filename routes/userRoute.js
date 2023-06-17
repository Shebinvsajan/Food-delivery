const express = require("express");
const router = express.Router();
const User = require('../Models/userModel')

router.post('/register',async (req,res)=>{
const {name,email,password} = req.body

const newUser = new User({name , email , password})


try {
  await  newUser.save()
    res.send('user register successfully')
} catch (error) {
    return res.status(404).json({message:error})
}

});

// router.post('/login', async (req,res)=>{
//     const{email,password}=req.body

//     try {

//         const user = await User.find({email,password})

//         if(user.length>0){
//             const currentUser={
//                 name:user[0].name,
//                 email:user[0].email,
//                 isAdmin:user[0].isAdmin,
//                 _id:user[0]._id
//             }
//             res.send(currentUser)
//         }else{
//             return res.status(404).json({message:"user login falied"})
//         }
        
//     } 
//     catch (error) {
//         return res.status(404).json({message:"somthing went wrong"})
//     }

// })


module.exports=router
