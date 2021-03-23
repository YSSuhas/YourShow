const mongoose = require('mongoose')
const dotenv = require('dotenv')
const admins = require('./database/admindata/admindata')
const Admin = require('./database/collection/adminschema')
const connectDB = require('./database/connectdatabase')

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Admin.deleteMany()
    const createdAdmins = await Admin.insertMany(admins)
    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Admin.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

importData();

//destroyData();