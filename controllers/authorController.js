const Author = require("../models/author")

exports.createAuthor = async (req, res) => {
    try {
        const newAuthor = await Author.create({ 
            name: req.body.name
         })
         await newAuthor.save();
        res.status(201).json({
            status: "success",
            data: newAuthor
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.readAuthor = async (req, res, next) => {
    try {
        const allAuthor = await Author.find({});
        res.json({
            status: "success",
            data: allAuthor
        });
    } catch (err) {
        res.json({
            status: "fail",
            message: err.message
        })
    }
};

exports.updateAuthor = async (req, res, next) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.authorId); // check author
        if (!author) {
            throw new Error("There is no user");
        };
        author.name = req.body.name;
        //author["name"] = req.body["name"];
        res.status(200).json({
            status: "success",
            data: author
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
};

exports.deleteAuthor = async (req, res, next) => {
    try {
        await Author.findByIdAndDelete(req.params.authorId); 
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
