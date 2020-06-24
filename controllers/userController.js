const User = require("../models/user")

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create({ 
            name: req.body.name, 
            email: req.body.email, 
            password: req.body.password
         })
         await newUser.save();
        res.status(201).json({
            status: "success",
            data: newUser
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.readUser = async (req, res, next) => {
    try {
        const allUsers = await User.find({});
        res.status(200).json({
            status: "success",
            data: allUsers
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId); // check user
        if (!user) {
            throw new Error("There is no user");
        };
        //const userFields = Object.keys(req.body);
        //userFields.map(field => user[field] = req.body[field]);
        user["name"] = req.body["name"]
        user["email"] = req.body["email"]
        user["password"] = req.body["password"]
        res.status(200).json({
            status: "success",
            data: user
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIDAndDelete(req.params.userId); // check user
        if (!user) {
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
