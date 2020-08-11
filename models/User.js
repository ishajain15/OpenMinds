const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },    
    
    confirmed: {
        type: Boolean,
        //commenting out line below for the time being
        //required: true,
        default: false
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;