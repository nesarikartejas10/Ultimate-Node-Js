import mongoose from "mongoose";

//connection
mongoose
  .connect("mongodb://localhost:27017/mongo-demo")
  .then(() => console.log("MongoDB connect successfully!!"))
  .catch((error) => console.log("MongoDB connection failed!!", error));

//define schema
new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, required: true },
  phone: { type: Number },
  hobbies: { type: [String] },
  isVerified: { type: Boolean, default: false },
});
