const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userroute')
const adminRoutes = require('./routes/adminroute')
const movieRoutes = require('./routes/movieroute')
const paymentRoutes = require('./routes/paymentroute')
const rentRoutes = require('./routes/rentroute')
const connectDB = require('./database/connectdatabase')
const { errorHandler } = require("./middleware/errormiddleware")

dotenv.config()

//var path = require("path");

const app = express();

app.use(express.json())

connectDB()

var morgan = require('morgan')
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use(`/api/users`,userRoutes);

app.use(`/api/admins`,adminRoutes);

app.use(`/api/movies`,movieRoutes);

app.use(`/api/payments`,paymentRoutes);

app.use(`/api/rents`,rentRoutes);

app.use(errorHandler);

const port = process.env.PORT || 5000
const host = process.env.HOST        
app.listen(port, console.log(`Server running in ${host} on port ${port}`))