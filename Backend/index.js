import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import bookRoutes from './route/book.route.js';
const app = express();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
//connecting to database
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to the database successfully");
}
catch (error) {
  console.error("Error connecting to the database:", error);
}

//definig routes
app.use('/book', bookRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
