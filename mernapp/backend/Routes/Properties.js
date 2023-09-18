const express=require('express')
const router=express.Router()
const data=require("../data/Properties")
 router.post('/foodData',(req,res)=>{
    try{
        
        res.send([data.data])
    }catch(err){
        res.send("server Error")
    }
})

module.exports=router



