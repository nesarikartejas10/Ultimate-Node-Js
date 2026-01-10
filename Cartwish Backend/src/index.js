import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//setup express server
const app = express();

//mongodb connection
mongoose
  .connect("mongodb://localhost:27017/cartwish")
  .then(() => console.log("MongoDB connect successfully!!"))
  .catch((error) => console.log("MongoDB connection failed!!", error));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
