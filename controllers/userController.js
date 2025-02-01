const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {

    res.status(201).json({message:"Register user"});
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
