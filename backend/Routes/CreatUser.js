const express = require('express')
const router = express.Router()
const User= require('../models/User')
const { body, validationResult } = require( 'express-validator');
router.post("/creatuser",
[body ('email').isEmail(),
body ('name').isLength({ min: 5 }),
body ('password').isLength({ min: 5 })] ,
async(req,res)=>{

    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password, location } = req.body;
    try{

        await User.create({
                name,
                password,
                email,
                location
        }).then(res.json({sucess:true}))
        
        
        
    }
    catch(error){
        console.log(error)
        res.json({sucess:false});
    }

})
module.exports = router;