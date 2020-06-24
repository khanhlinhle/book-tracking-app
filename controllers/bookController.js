const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");


exports.createBook = async (req, res) => {
    try {
        const newBook = await Book.create({ 
            title: req.body.title, 
            description: req.body.description, 
         });
         newBook.author = await Author.findById(req.body.author);
         newBook.genres = await Promise.all(req.body.genres.map(async id => await Genre.findById(id)));
         await newBook.save();
        res.status(201).json({
            status: "success",
            data: newBook
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.readBook = async (req, res, next) => {
    try {
        const allBook = await Book.find({});
        res.status(200).json({
            status: "success",
            data: allBook
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
};

exports.updateBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.bookId); // check user
        if (!book) {
            throw new Error("There is no user");
        };
        const bookFields = Object.keys(req.body);
        bookFields.map(field => book[field] = req.body[field]);
        res.status(200).json({
            status: "success",
            data: book
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
};

exports.deleteBook = async (req, res, next) => {
    try {
        const book = await Book.findByIDAndDelete(req.params.bookId); // check user
        if (!book) {
            throw new Error("There is no user");
        };
        
        res.status(204).json({
            status: "success",
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        })
    }
};
