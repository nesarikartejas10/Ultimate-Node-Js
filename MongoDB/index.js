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
  age: { type: Number, required: true },
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
    age: 34,
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

// sorting();

//Comparison operator ($gt,$gte,$lt,$lte,$eq,$ne,$in,$nin)
async function fetchDataByAge() {
  // const users = await User.find({ age: { $gte: 30 } });
  // const users = await User.find({ age: { $lte: 30 } });

  //$in operator
  // const users = await User.find({ age: { $in: [28, 34] } });

  //$nin operator
  const users = await User.find({ age: { $nin: [28, 34] } });
  console.log(users);
}

// fetchDataByAge();

//Logical Operator ($or, $and, $nor, $not)
async function logicalOperator() {
  //1.$or=>if any one condition match return data
  // const users = await User.find({
  //   $or: [{ age: 30 }, { name: "Prasad Patil" }],
  // });

  //2.$and=>if all conditions match return data
  // const users = await User.find({
  //   $and: [{ age: 33 }, { name: "Prachi Patil" }],
  // });

  //or
  // const users = await User.find({ age: 33, name: "Prachi Patil" });

  //3.$nor=>return documents that fail to match all of the specified conditions
  // const users = await User.find({
  //   $nor: [{ age: 30 }, { name: "Prasad Patil" }],
  // });

  //4.$not=> not operator works with comparison operator and regular expression

  // e.g=>whose age is not equal to 30
  // const users = await User.find({ age: { $not: { $eq: 30 } } });

  //Regular Expression
  // const users = await User.find({ name: /^P/ }); //name starts with 'P'
  // const users = await User.find({ name: /l$/ }); //name ends with 'l'

  // const users = await User.find({ email: /gmail\.com$/i }); // email ends with ''gmail.com' and i for case insensitive

  const users = await User.find({ name: /asad/i }); //name contains word 'asad'
  console.log(users);
}

logicalOperator();
