//DATABASE SCHEMA FOR ORDERS
const mongoose = require('mongoose')
const User = require('./userschema')
const Movie = require('./movieschema')

const paymentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Movie'
    },
    paymentMethod: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      default: 500
    },
    paidAt: {
      type: Date,
      default: Date.now
    },
  },
  {
    timestamps: true,
  }
)

const Payment = mongoose.model('Payment', paymentSchema)

module.exports = Payment