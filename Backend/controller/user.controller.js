import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

// Signup Controller
export const signup = async (req, res) => {
  let { username, email, password } = req.body;

  try {
    username = username.trim();
    email = email.trim();

    // 1️⃣ Check if username or email already exists
    const existingUser = await User.findOne({ 
      $or: [{ username }, { email }] 
    });
    if (existingUser) {
      return res.status(400).json({ message: "Username or email already exists" });
    }

    // 2️⃣ Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3️⃣ Create a new user with hashed password
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // 4️⃣ Save the user in the database
    await newUser.save();

    // 5️⃣ Send success response (without password)
    const userResponse = {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      createdAt: newUser.createdAt
    };

    res.status(201).json({ message: "User created successfully", user: 
      {
        _id: userResponse.id,
        username: userResponse.username,
        email: userResponse.email,
        createdAt: userResponse.createdAt
      }
     });
  } catch (error) {
    console.error("Error while signing up:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login Controller
export const login = async (req, res) => {
  let { email, password } = req.body;
  email = email.trim();

  try {
    // 1️⃣ Check if user exists by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // 2️⃣ Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // 3️⃣ Send success response (without password)
    const userResponse = {
      id: user._id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt
    };

    res.status(200).json({ message: "Login successful", user: userResponse });
  } catch (error) {
    console.error("Error while logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
