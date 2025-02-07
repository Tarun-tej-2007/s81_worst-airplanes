const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    name : String,
    email : {type: String , unique: true},
    password :String,
})

module.exports = mongoose,model( "User",Userschema);
