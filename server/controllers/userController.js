import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/userModel.js";
const userRoute = express.Router();

// @desc Authenticate User
// @route GET /api/users/auth
// @access Public
userRoute.get("/auth", async (req, res, next) => {
  try {
    return res.status(200).json({ message: "Authenticated" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

// @desc Authenticate User
// @route GET /api/users/auth
// @access Public
userRoute.post("/register", async (req, res, next) => {
  const { username, email, password } = req.body;
  const newUser = new User({
    username,
    email,
    password,
  });
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password is required" });
    }
    const isExistingUser = await User.findOne({ email });
    if (isExistingUser) {
      return res.status(400).json({ message: "User already exists." });
    }
    const user = await newUser.save();
    return res.status(201).json({
      id: user.id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

// userRoute.post("/", async (req, res, next) => {
//   try {
//   } catch (error) {}
// });

export default userRoute;
