const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Author name is required !!!'],
    }
},{
    timestamp: true
});

const Author = mongoose.model("Author", authorSchema); // name of our model

module.exports = Author;