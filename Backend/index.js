import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoutes from "./route/book.route.js";

dotenv.config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Middleware to parse JSON requests
app.use(express.json());

// Connecting to MongoDB
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to the database successfully"))
  .catch((error) => console.error("❌ Error connecting to the database:", error));

// Defining routes
app.use("/book", bookRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
