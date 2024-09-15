// Creating a database connection using mongoose.


const mongoose = require('mongoose');
require('dotenv').config();
const mongo_uri = process.env.MONGO_URI; 

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri);
    console.log('MongoDB connected.');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
mongoose

module.exports = connectDB;
