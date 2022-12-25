/** @format */

const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
require("dotenv").config();
// @collecting data from req.body
// @checking user entered input valid or not
// @if user alreday exists then telling him to login
// @creating new user in database
// @hashing password and saving user into database
const userSignUp = async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    res.status(401).json({ error: "Please enter Email and Password" });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(401).json({ error: "email is already registered with us" });
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: encryptedPassword,
  });

  await user.save();

  res.status(200).json(user);
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    res.status(401).json({ error: "Please enter Email and Password" });
  }

  const user = await User.findOne({ email });

  const comparePassword = await bcrypt.compare(password, user.password);

  if (!user) {
    res.status(401).json({ error: "error while logging in" });
  }

  const token = JWT.sign({ id: user._id }, process.env.JWT_SECRETE, {
    expiresIn: "1h",
  });

  user.password = undefined;
  user.token = token;

  res.status(200).json({
    token,
    user,
  });
};

module.exports = {
  userSignUp,
  userLogin,
};
