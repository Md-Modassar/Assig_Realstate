const express=require('express')
const router=express.Router()
const usermodel=require('../models/User')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const { body, validationResult } =require('express-validator')
const jwtSecreate="dshgkKGDhLhldajJ"


router.post("/createuser",[body('email').isEmail(),body('password').isLength({min:5})],async(req,res)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).send({error:error.array})
    }
    let data=req.body
    const salt=await bcrypt.genSalt(10)
    let secpassword=await bcrypt.hash(data.password,salt)
   try{
        data.password=secpassword
        let savedata=await usermodel.create(data)

       return res.send(savedata)
   }catch(err){

   }
})


router.post("/loginuser",[body('email').isEmail(),body('password').isLength({min:5})],async(req,res)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).send("Invalid email or password")
    }
    try{ 
    let {email,password}=req.body
       let user=await usermodel.findOne({email:email})
       if(!user)
         {
           return res.status(400).send("Please enter valid email")
         }
         const camparepassword=await bcrypt.compare(password,user.password)
          if(!camparepassword)
            {
               return res.status(400).send("Plase Enter valid Password")
            }
            const data={
                user:{
                    id:user.id
                }
            }
        
            const authToken=jwt.sign(data,jwtSecreate)

            return res.status(200).send({status:true,toke:authToken})
    }catch(error){
      
   }
})





module.exports=router