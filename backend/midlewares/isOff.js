const passport=require('passport')
const usermodel=require('../model/usermodel')
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secretword;
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
passport.initialize()
passport.use(new JwtStrategy(opts, async(decoded, done)=> {
 
        try {  const user=await usermodel.findOne({_id: decoded._id}).select('-password')
        // console.log(user)
            if (!user) {
                return done(null, false);
            }
             done(null, user);
              
        } catch (error) {
            done(error, false);
            console.log(error)
        }
            // or you could create a new account

}));
module.exports=isAuth=()=>passport.authenticate('jwt',{session:false})