import mongoose from "mongoose";

//connection
mongoose
  .connect("mongodb://localhost:27017/mongo-demo")
  .then(() => console.log("MongoDB connect successfully!!"))
  .catch((error) => console.log("MongoDB connection failed!!", error));

//define schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, required: true },
  phone: { type: Number },
  hobbies: { type: [String] },
  isVerified: { type: Boolean, default: false },
});

//creating mongodb model
const User = mongoose.model("User", userSchema);

//create user
async function createUser() {
  const newUser = new User({
    name: "Tejas Nesarikar",
    email: "tejas@gmail.com",
    password: "abc@123",
    phone: 9876543210,
    hobbies: ["Cricket", "Movies", "Trekking"],
  });

  const storeUserData = await newUser.save();
  console.log(storeUserData);
}

createUser();
