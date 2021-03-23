//DATABASE SCHEMA FOR ORDERS
const mongoose = require('mongoose')
const User = require('./userschema')
const Movie = require('./movieschema')

const rentSchema = mongoose.Schema(
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
    rentMethod: {
      type: String,
      required: true
    },
    rentTime: {
      type: Number,
      required: true,
      default: 14400
    },
    price: {
      type: Number,
      required: true,
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

rentSchema.index({createdAt: 1},{expireAfterSeconds: 60,partialFilterExpression : {rentTime: 60}});
rentSchema.index({createdAt: 1},{expireAfterSeconds: 14400,partialFilterExpression : {rentTime: 14400}});
rentSchema.index({createdAt: 1},{expireAfterSeconds: 86400,partialFilterExpression : {rentTime: 86400}});

const Rent = mongoose.model('Rent', rentSchema)

module.exports = Rent