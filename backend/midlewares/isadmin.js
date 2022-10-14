const isadmin = (req,res,next)=>{
    console.log(req.user)
if(req.user.role!=="admin"){
return res.status(400).send({msg:"you are not admin"})
}
return  next();
}
module.exports=isadmin