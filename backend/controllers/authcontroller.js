const usermodel = require("../model/usermodel");
var jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')
const signUp =async(req,res)=>{
const {email,password}=req.body;

   
try {
   //1//check if user exist
   const user= await usermodel.findOne({email})
   if (user) {
    return res.status(400).send("user exist")
   }

   //creation de user
   const newuser=new usermodel({...req.body})
   //hash pwd
   const pxdH=await bcrypt.hash(password,10)
   newuser.password=pxdH
   await newuser.save()
    res.send({newuser,msg:"user succefully registred"})
} catch (error) {
    res.status(400).send({msg:error.message})
}

}
const signIn=async(req,res)=>{
    const {email,password} = req.body
    
    try {
       // Check user 
     const user = await usermodel.findOne({email})  
     if (!user) {
        return res.status(400).send({msg:"Bad credentials (email)"})
     }
     // check password
     const match = await bcrypt.compare(password,user.password)
     if (!match) {

        return res.status(400).send({msg:"Bad credentials (password)"})
     }
     const payload ={_id:user._id}
     const token =jwt.sign(payload,process.env.secretword);
    res.send({user,token})

    } catch (error) {
        res.status(400).send({msg:error.message})
    }

}


//current user
const current = (req,res) => { 
    res.send({user:req.user})
 }








module.exports={
    signUp,signIn,current
}