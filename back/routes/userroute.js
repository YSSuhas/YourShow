const express = require('express');
const bodyParser = require('body-parser');
const User = require('../database/collection/userschema')
const asyncHandler = require('express-async-handler')
const generateToken = require('../tokens/generatetokens')

const router = express.Router();

//   @desc   Register a user
//   @route  POST /api/users/register
//   @access Public
router.post(
    '/register',
    asyncHandler( async (req,res) => {
        const {username,mail,password} = req.body
        const userExists = await User.findOne({mail})

        if(userExists){
            res.status(400);
            throw new Error('A user with this email aldready exists')
        }

        const user = new User(req.body);
        await user.save();  
        if(user){
            res.status(201).json({
                _id:user._id,
                username: user.username,
                mail: user.mail,
                token: generateToken(user._id)
            })
        }else {
            res.status(400)  
            throw new Error("Invalid user data")
        }
    })
)

//   @desc   Login a user
//   @route  POST /api/users/
//   @access Public
router.post(
    '/',
    asyncHandler( async (req,res) => {
        const {mail,password} = req.body
        const user = await User.findOne({mail})

        if(user && (await user.matchPassword(password))){
            res.json({
                _id:user._id,
                username: user.username,
                mail: user.mail,
                token: generateToken(user._id)
            })
        }else{
            res.status(401)
            throw new Error('Invalid email or password')
        }
        
    })
)

//   @desc   Get user profile
//   @route  GET /api/users/profile
//   @access Private
router.get(
    '/profile',
    asyncHandler( async (req,res) => {
    	const {userInfo} = req.body
        const user = await User.findById(userInfo);
        if(user){
            res.json({
                _id:user._id,
                username: user.username,
                mail:user.mail
            })
        }else{
            res.status(401);
            throw new Error("User not found")
        }
    })
)

//   @desc   Update user profile
//   @route  PUT /api/users/profile
//   @access Private
router.put(
    '/register',
    asyncHandler( async (req,res) => {
    	const {userInfo,username,mail} = req.body
        const user = await User.findById(userInfo);
        if(user){
            user.username = username || user.username
            user.mail = mail || user.mail
             const updatedUser = await user.save()
             res.json({
                _id:updatedUser._id,
                username: updatedUser.username,
                mail:updatedUser.mail,
                token: generateToken(updatedUser._id)
            })
        }else{
            res.status(401);
            throw new Error("User not found")
        }
        
        
    })
)

module.exports = router