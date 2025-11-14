import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoutes from "./route/book.route.js";
import userRoutes from "./route/user.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB URI
const URI = process.env.MongoDBURI;

// ---------- VERCEL SERVERLESS DB FIX ----------
let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB Connected (Vercel)");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
}
// ------------------------------------------------

// Routes
app.use("/book", bookRoutes);
app.use("/user", userRoutes);

// ----------- EXPORT FOR VERCEL (IMPORTANT) -----------
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

export default app; 
