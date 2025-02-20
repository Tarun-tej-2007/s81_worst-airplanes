const moongose = require('mongoose');

const AirplanesSchema = new moongose.Schema({
    name : {
        type : String,
            required : true},
    year : {
        type : Number,
        required : true
    }

    });

const ReviewSchema = new moongose.Schema({
    review:{
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    airplane : {
        type : moongose.Schema.Types.ObjectId,
        ref : 'Airplanes'
    }
})
  
const AirplanesModel = moongose.model('Airplanes',AirplanesSchema);
const Review = moongose.model('Review',ReviewSchema);
module.exports = {AirplanesModel,Review};
