const usermodel = require("../model/usermodel")

const getallusers =async (req,res)=>{
  try {
    const allusers= await usermodel.find()
    res.send({allusers})
  } catch (error) {
    res.status(400).send({msg:error.msg})
    
  }

}
module.exports= {
    getallusers
}