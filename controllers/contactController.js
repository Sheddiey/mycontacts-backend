const asyncHandler = require("express-async-handler");
//@descr Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async(req, res) => {
  res.status(200).json({ Message: "Get all contacts" });
});

//@descr Create New contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async(req, res) => {
  console.log("The request body is:", req.body);
  const {name, body, email} = req.body;
  if(!name || !body || !email) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  res.status(201).json({ Message: "Create contact" });
});

//@descr Get contact
//@route POST /api/contacts/:id
//@access public
const getContact = asyncHandler(async(req, res) => {
  res.status(200).json({ Message: `Get contact for ${req.params.id}` });
});

//@descr Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async(req, res) => {
  res.status(200).json({ Message: `Update contact for ${req.params.id}` });
});

//@descr Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async(req, res) => {
  res.status(201).json({ Message: `Delete contact for  ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  deleteContact,
  updateContact,
  getContact,
};
