const mongoose = require('mongoose');
require("dotenv").config();
let connect=mongoose.connect(process.env.mongo_url)

module.exports=connect;