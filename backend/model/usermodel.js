const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  password: String,
  createddate: { type: Date, default: Date.now() },
  banne:{type: Boolean,default:false},
  image: String ,
  role:{type:String,enum:["client","admin","superadmin"],default:"client"},

});
module.exports=usermodel=mongoose.model("user",userschema)

