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
    name: "Prasad Patil",
    email: "prasad@gmail.com",
    password: "def@123",
    phone: 9856449210,
    hobbies: ["Reading", "Tracking", "football"],
  });

  const storeUserData = await newUser.save();
}
// createUser();

//fetch all users
async function getUsers() {
  const users = await User.find();
  console.log(users);
}
// getUsers();

//fetch by specific field
async function fetchUsersBasedOnField() {
  const users = await User.find({ name: "Tejas Nesarikar" });
  console.log(users);
}

// fetchUsersBasedOnField();

//get specific field
async function getSpecificField() {
  // const users = await User.find({ name: "Tejas Nesarikar" }).select(
  //   "name hobbies"
  // );

  // or Remove specific field
  const users = await User.find({ name: "Tejas Nesarikar" }).select(
    "-password"
  );
  console.log(users);
}

// getSpecificField();

//limit and skip
async function fetchSpecificDocument() {
  const users = await User.find().limit(2).skip(2);
  console.log(users);
}

// fetchSpecificDocument();

//sort data
async function sorting() {
  const users = await User.find().sort({ name: 1 }); //1-for ascending and -1 for descending
  console.log(users);
}

sorting();
