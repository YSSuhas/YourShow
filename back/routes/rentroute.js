const express = require('express');
const Rent = require('../database/collection/rentschema')
const User = require('../database/collection/userschema')
const Movie = require('../database/collection/movieschema')
const asyncHandler = require('express-async-handler')
const {protect} = require('../middleware/authmiddleware')
const router = express.Router(); 
const bodyParser = require('body-parser');
var http = require('http');
var url = require('url') ;

router.use(bodyParser.urlencoded({extended: true}));

//   @desc   Create a new rent
//   @route  GET /api/rents/
//   @access Private
router.post(
    '/',
    asyncHandler(async (req,res) => {
        const { rentMethod,userInfo,movie,price,rentTime } = req.body;
        //const user = await User.findOne({userInfo._id})
            const rent = new Rent({
                user: userInfo,
                movie: movie,
                rentMethod: rentMethod,
                price: price,
                rentTime: rentTime
            })
            .populate('user')
            .populate('movie')
            const rentDone = await rent.save()
            res.status(201).json(rentDone)
    })
)

//   @desc   Get payments of a particular person
//   @route  GET /api/payments/mypayments
//   @access Private
router.get(
    '/myrents',
    asyncHandler(async (req,res) => {
        const rents = await Rent.find({user: req.query.userId}).populate('movie')
        if(rents){
            res.json(rents)
        }else{
            res.status(404).json({message: "No rented movies"})
        }
    })
)

module.exports = router