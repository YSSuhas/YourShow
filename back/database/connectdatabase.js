const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config()

const connectDB = async () => {
    try{
       const conn = await mongoose.connect(process.env.MONGODB_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
       } ) 
       console.log("Connected to database")
    }catch(err) {
        console.log(`Error ${err.message}`)
        process.exit(1);
    }
}

module.exports = connectDB;