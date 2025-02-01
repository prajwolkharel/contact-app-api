const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const userAvailable = await User.findOne({email});
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    };

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });

    res.status(200).json({_id: user.id, email: user.email});
});

//@desc Login a user
//@route POST api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({message:"Login user"});
});

//@desc Current user info
//@route api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json({message:"Current user"})
});

module.exports = {registerUser, loginUser, currentUser}
