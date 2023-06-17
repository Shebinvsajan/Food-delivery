const express = require("express");
const router = express.Router();
const menu = require('../Models/menuModel')


// /get menu
router.get("/getmenu", async (req,res)=>{

    try {
        const Menu = await menu.find({})
        res.send(Menu)
        
    } catch (error) {
        return res.status(404).json({message:error})
    }

})

module.exports  = router;