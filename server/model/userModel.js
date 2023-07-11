const mongoose = require('mongoose');

const user = new mongoose.Schema({
    nameUser: {
        type: String,
        require: true,
        min: 5,
        max: 50
    },
    email: {
        type: String,
        require: true,
        unique:true
    },
    password: {
        type: String,
        min: 10,
        max: 50,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
{ timestamps: true })

module.exports = mongoose.model('User', user)