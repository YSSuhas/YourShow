const mongoose = require('mongoose');
const User = require('./userSchema')
const Movie = require('./movieSchema')

const reviewSchema = mongoose.Schema({
	name: {
	  type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Movie',
    },
	user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
	rating: {
		type: Number, 
		required: true 
	},
	comment: {
		type: String
	}
},{
	timestamps: true
})

module.exports = mongoose.model('Review',reviewSchema);