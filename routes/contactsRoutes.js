const express = require("express");
const {
  getContacts,
  createContact,
  deleteContact,
  updateContact,
  getContact,
} = require("../controllers/contactController");
const router = express.Router();

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
