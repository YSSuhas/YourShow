const express = require('express');
const Payment = require('../database/collection/paymentschema')
const User = require('../database/collection/userschema')
const Movie = require('../database/collection/movieschema')
const asyncHandler = require('express-async-handler')
const {protect} = require('../middleware/authmiddleware')
const router = express.Router(); 
const bodyParser = require('body-parser');
var http = require('http');
var url = require('url') ;

router.use(bodyParser.urlencoded({extended: true}));

//   @desc   Create a new payment
//   @route  GET /api/payments/
//   @access Private
router.post(
    '/',
    asyncHandler(async (req,res) => {
        const { paymentMethod,userInfo,movie } = req.body;
        //const user = await User.findOne({userInfo._id})
            const payment = new Payment({
                user: userInfo,
                movie: movie,
                paymentMethod
            })
            .populate('user')
            .populate('movie')
            const paymentDone = await payment.save()
            res.status(201).json(paymentDone)
    })
)

/*router.post(
    '/mypayments',
    asyncHandler(async (req,res) => {
        const { userInfo } = req.body;
        //const user = await User.findOne({userInfo._id})
        console.log(userInfo);
    })
)*/

//   @desc   Get payments of a particular person
//   @route  GET /api/payments/mypayments
//   @access Private
router.get(
    '/mypayments',
    asyncHandler(async (req,res) => {
    	const payments = await Payment.find({user: req.query.userId}).populate('movie')
        if(payments){
            res.json(payments)
        }else{
            res.status(404).json({message: "No payment done"})
        }
    })
)

module.exports = router