// controllers/auth.controller.js (your server side)
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken"; // optional, for tokens

export const signup = async (req, res) => {
  let { username, email, password } = req.body;
  try {
    username = username.trim();
    email = email.trim();
    password = (password || "").trim();

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) return res.status(400).json({ message: "Username or email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const userResponse = {
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      createdAt: newUser.createdAt,
    };

    res.status(201).json({ message: "User created successfully", user: userResponse });
  } catch (error) {
    console.error("Error while signing up:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  let { email, password } = req.body;
  try {
    email = (email || "").trim();
    password = (password || "").trim();

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const userResponse = {
      _id: user._id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
    };

    // Optional: create token
    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({ message: "Login successful", user: userResponse /*, token */ });
  } catch (error) {
    console.error("Error while logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
