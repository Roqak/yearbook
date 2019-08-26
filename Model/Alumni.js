const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AlumniSchema = new Schema({
    Created_at: {
        type: Date,
        required: true,
        default: Date.now()
    },
    Firstname: {
        type: String,
        required: true
    },
    Lastname:{
        type: String,
        required: true
    },
    Location:{
        type: String,
        required: true
    },
    Phone:{
        type: String,
        required: true
    },
    image:{
        type: String,
        // required: true
    },
    Description:{
        type: String,
        required: true
    },
    mail:{
        type: String,
        required: true
    }
});
module.exports = Alumni = mongoose.model('alumni',AlumniSchema);