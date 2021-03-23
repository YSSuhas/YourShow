const express = require('express');
const bodyParser = require('body-parser');
const Movie = require('../database/collection/movieschema')
const asyncHandler = require('express-async-handler')

const router = express.Router();

//   @desc   Register a movie
//   @route  POST /api/movies/
//   @access Admin
router.post(
    '/register',
    asyncHandler( async (req,res) => {
        const {moviename,poster,releaseYear,duration,language,director} = req.body
        const movie = new Movie(req.body);
        const addedmovie = await movie.save();   
        if(addedmovie){
            res.status(201).json(addedmovie)
        }else {
            res.status(400)  
            throw new Error("Invalid movie data")
        }
    })
)

//   @desc   Fetch all movies
//   @route  GET /api/movies/
//   @access Public
router.get(
    '/',
    asyncHandler( async (req,res) => {
        const movies = await Movie.find({})
        res.json(movies)
    })
)

//   @desc   Fetch a particular movie based on id
//   @route  GET /api/movies/:id
//   @access Public
router.get(
    '/:id',
    asyncHandler( async (req,res) => {
        const movie = await Movie.findById(req.params.id);
        if(movie){
            res.json(movie)
        }else{
            res.status(404).json({message: "Movie not found"})
        }
    })
)

module.exports = router