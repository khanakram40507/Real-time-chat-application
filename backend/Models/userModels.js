const e = require('express');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String, 
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender:{
        type: String,
        enum: ['male', 'female', 'other']

    },

    password: {
        type: String,
        required: true,
        minilength: 6,
    },
    profilepic:{
        type: String,
        default: "https://res.cloudinary.com/dq1xj3k2h/image/upload/v1735681234/DefaultProfilePic.png",
        required: true,

    }
},{timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;