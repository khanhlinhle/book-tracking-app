const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Book must have a title"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Book must have a description"],
        trim: true
    },
    author: {type: Object},
    genre: {type: Array}
}, {
    timestamp: true
});

// bookSchema.pre("save", async function (next) {
//     this.author = await Author.findById(this.author);
//     next();
// });

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;