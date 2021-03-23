const mongoose = require('mongoose');
//const Poster = require('./defaultmovieposter.jpg')

const movieSchema = mongoose.Schema({
	moviename: {
		type: String, 
		required: true
	},
	poster: {
		type: String ,
		default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIX-ulC47JiJN2hDhOMjIUG91x0o_x1uDgw&usqp=CAU'
	},
	releaseYear: {
		type: Number
	},
	duration: {
		type: Number,
		required: true
	},
	language: {
		type: String
	},
	director: {
		type: String
	},
	movieadded: {
		type: Date,
		default: Date.now
	}
},{
	timestamps: true
})

module.exports = mongoose.model('Movie',movieSchema);