//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({message:"Get all contacts"})
};

//@desc Create new contact
//@route POST api/contacts/:id
//@access public
const createContact = (req, res) => {
    res.status(201).json({message:""})
}







module.exports = {getContact};