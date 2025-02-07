const mongoose = require('mongoose');
require('dotenv').config();                                                                                               

const connectDB = async () => {
   try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlPaser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB connection SUCCESS');
   } catch (error) {
    console.error('MongoDB not connected');
    process.exit(1);
   } 
}


module.exports = connectDB;