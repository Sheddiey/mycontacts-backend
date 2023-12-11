const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/user/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

//@desc Login user
//@route POST /api/user/login
//@access public
const LoginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login the user" });
});

//@desc Current user
//@route POST /api/user/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, LoginUser, currentUser };
