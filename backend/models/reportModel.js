const mongoose = require('mongoose');

const reportGen = new mongoose.Schema({
    title:{
        required:[true,'Event  title is required'],
        type:String,
    },
    description:{
        required:[true,'Event description is required'],
        type:String,
    },
    duration:{
        required:[true,'Date is mandatory'],
        type:String,
        },
    location:{
            type: String,
            required: [true, 'Event location is required'],
        },
    image: { 
            type:String,
            required: [false, 'Event image is required'],
        },
    template:{
        type:String,
        required:[true,'Event template is required'],
        },
    
})
module.exports = mongoose.model('Report', reportGen);