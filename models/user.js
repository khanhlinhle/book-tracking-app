const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required !!!'],
    },
    email: {
        type: String,
        required: [true, "Email is required !!!"],
        trim: true
    },
    password:{
        type: String,
        required: [true, "Email is required !!!"],
        trim: true,
    }
},{
    timestamp: true
});

const User = mongoose.model("User", userSchema); // name of our model

module.exports = User