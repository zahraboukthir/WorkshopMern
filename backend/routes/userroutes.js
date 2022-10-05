const express=require("express")
const { signUp, signIn, current } = require("../controllers/authcontroller")
const { registerrules, validator, loginrules } = require("../midlewares/bodyvalidator")
const router = express.Router()
const isAuth=require('../midlewares/isOff')
/**
 * @params POST /user/signup
 * @description add user
 * @access public
 */
router.post("/signup",registerrules(),validator,signUp)
/**
 * @params POST /user/signin
 * @description login user
 * @access public
 */
 router.post("/signin",loginrules(),validator,signIn)


 /**
 * @params GET /user/currentUser
 * @description current user
 * @access private
 */
  router.get("/currentUser",isAuth(),current)









module.exports=router