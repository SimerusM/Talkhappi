const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const userDataSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    scores: [{
        type: Number,
        required: true
    }],

}, { timestamps: true })

module.exports = mongoose.model('UserData', userDataSchema) 