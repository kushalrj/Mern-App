const express = require('express')
const router = express.Router()
const User= require('../models/User')
const { body, validationResult } = require( 'express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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
  const salt = await bcrypt.genSalt(10);
  let secPassword= await bcrypt.hash(password,salt)
    try{

        await User.create({
                name,
                password,
                email,
                location
        }).then(res.json({success:true}))
        
        
        
    }
    catch(error){
        console.log(error)
        res.json({success:false});
    }

})
router.post("/loginuser",
[body ('email').isEmail(),
body ('password').isLength({ min: 5 })] ,
async(req,res)=>{
    const errors = validationResult(req);
   if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {  email, password } = req.body;
    try{

      let userData=  await User.findOne({email});
      if(!userData){
        return res.status(400).json({ errors: "Not exist account"});
      }
      if(password!==userData.password){
        //here password is from our input req and userData is from server side!
        return res.status(400).json({ errors: "wrong password"});
      }
      return res.json({ success:true});
        
    }
    catch(error){
        console.log(error)
        res.json({success:false});
    }

})
module.exports = router;