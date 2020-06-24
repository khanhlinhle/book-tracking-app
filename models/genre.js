const mongoose = require("mongoose");

const genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Genre name is required !!!'],
        trim: true,
        unique: true
    },
},{
    timestamp: true
});

const Genre = mongoose.model("Genre", genreSchema); // name of our model

module.exports = Genre