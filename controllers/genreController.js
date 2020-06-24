const Genre = require("../models/genre")

exports.createGenre = async (req, res) => {
    try {
        const newGenre = await Genre.create({ 
            name: req.body.name
         })
         await newGenre.save();
        res.status(201).json({
            status: "success",
            data: newGenre
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.readGenre = async (req, res, next) => {
    try {
        const allGenre = await Genre.find({});
        res.json({
            status: "success",
            data: allGenre
        });
    } catch (err) {
        res.json({
            status: "fail",
            message: err.message
        })
    }
};

exports.updateGenre = async (req, res, next) => {
    try {
        const genre = await Genre.findByIdAndUpdate(req.params.genreId); 
        if (!genre) {
            throw new Error("There is no user");
        };
        genre.name = req.body.name;
        //author["name"] = req.body["name"];
        res.status(200).json({
            status: "success",
            data: genre
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
};

exports.deleteGenre = async (req, res, next) => {
    try {
        await Genre.findByIdAndDelete(req.params.genreId); 
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
