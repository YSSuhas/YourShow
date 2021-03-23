const express = require('express');
const bodyParser = require('body-parser');
const Admin = require('../database/collection/adminschema')
const User = require('../database/collection/userschema')
const asyncHandler = require('express-async-handler')
const generateToken = require('../tokens/generatetokens')

const router = express.Router();

//   @desc   Login a admin
//   @route  POST /api/admins/admin/login
//   @access Public
router.post(
    '/admin/login',
    asyncHandler( async (req,res) => {
        const {mail,password} = req.body
        const admin = await Admin.findOne({mail})

        if(admin && (await admin.matchPassword(password))){
            res.json({
                _id:admin._id,
                adminname: admin.adminname,
                mail: admin.mail,
                token: generateToken(admin._id)
            })
        }else{
            res.status(401)
            throw new Error('Invalid email or password')
        }
        
    })
)

//   @desc   Fetch all movies
//   @route  GET /api/admins/admin/getusers
//   @access Public
router.get(
    '/admin/getusers',
    asyncHandler( async (req,res) => {
        const users = await User.find({})
        res.json(users)
    })
)

module.exports = router