const registerUser = (req, res) => {

    res.status(201).json({message:"Register user"});
};

const loginUser = (req, res) => {
    res.status(200).json({message:"Login user"});
};

const currentUser = (req, res) => {
    res.status(200).json({message:"Current user"})
}

module.exports = {registerUser, loginUser, currentUser}