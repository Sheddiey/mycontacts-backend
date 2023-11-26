//@descr Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ Message: "Get all contacts" });
};

//@descr Create New contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  console.log("The request body is:", req.body);
  const {name, body, email} = req.body;
  if(!name || !body || !email) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  res.status(201).json({ Message: "Create contact" });
};

//@descr Get contact
//@route POST /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({ Message: `Get contact for ${req.params.id}` });
};

//@descr Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ Message: `Update contact for ${req.params.id}` });
};

//@descr Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ Message: `Delete contact for  ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  deleteContact,
  updateContact,
  getContact,
};
