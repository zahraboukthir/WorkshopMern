const { body, validationResult } = require('express-validator');
const registerrules=()=>[
    body('fullname',"fullname is required").notEmpty(),
    body('email',"email is not valid").isEmail(),
    body('password',"password is not between [8..20] ").isLength({ min: 8 ,max:20}),

] 
const loginrules=()=>[
   
    body('email',"email is not valid").isEmail(),
    body('password',"password is not between [8..20] ").isLength({ min: 8 ,max:20}),
    
] 
const validator=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(custumerrors(errors.array()));
    }else{
        next();
    }
}
const custumerrors=(error)=>
    error.map((err)=>({msg:err.msg}))

module.exports={validator,loginrules,registerrules}