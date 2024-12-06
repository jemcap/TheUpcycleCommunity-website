import express from "express";
import jwt from "jsonwebtoken";

import User from "../models/userModel.js";
import verifyToken from "../middleware/verifyToken.js";
const userRoute = express.Router();

// @desc Register User
// @route POST /api/users/register
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

// @desc Login User
// @route GET /api/users/login
// @access Public
userRoute.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password is required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid Email or Password. Please try again." });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
});

userRoute.post("/logout", (req, res, next) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      secure: process.env.JWT_SECRET === "production",
      sameSite: "strict",
      expires: new Date(0),
    });

    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

userRoute.get("/protected", verifyToken, (req, res) => {
  res.status(200).json({ message: "This is a protected route" });
});

export default userRoute;
