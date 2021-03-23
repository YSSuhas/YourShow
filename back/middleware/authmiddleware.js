const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const User = require('../database/collection/userschema')

//CHECK WHETHER THE USER IS LOGGED IN OR NOT BY CHECKING THE TOKEN IN HEADER. 
//ALLOW ACCESS TO NEXT MIDDLEWEARS AND  ROUTES ONLY IF LOGGED IN
module.exports.protect = asyncHandler(async (req,res,next) => {
    
    let token;
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            throw new Error('authorized')
            req.user = await User.findById(decoded.id).select('password')
            next();
        }catch(err){
            res.status(401);
            throw new Error('Not authorized, token failed')
        }
    }  
    
    if(!token){
        res.status(401)
        throw new Error('Not authorized,no token')
    }
    
    
})