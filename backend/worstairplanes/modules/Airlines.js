const mongoose = require('mongoose');

const AirlinesSchema = new mongoose.Schema({
    name: String,
    country : String,
    rating : Number,
    delayRate : Number,
    complaints : String,
    description : String,

});

module.exports = mongoose.model("Airline",AirlinesSchema);