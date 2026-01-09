import mongoose from "mongoose";
import { faker } from "@faker-js/faker";

mongoose
  .connect("mongodb://localhost:27017/mongo-relationship")
  .then(() => console.log("MongoDB connected Successfully!!"))
  .catch((err) => console.log("MongoDB Connection Failed", err));

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the user name!"],
    minlength: 3,
    maxlength: 200,
  },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
});

// userSchema.index({ email: 1 });

const User = mongoose.model("User", userSchema);

// ✅ Function to insert 100 test users
async function insertTestUsers() {
  const users = [];
  for (let i = 0; i < 100000; i++) {
    users.push({
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      password: faker.internet.password(),
    });
  }

  await User.insertMany(users);
  console.log("✅ 100000 users inserted successfully!");
}

// insertTestUsers();

async function findUser(email) {
  let startTime = performance.now();
  await User.find({ email: email });
  let endTime = performance.now();
  console.log(`🚀 Time taking by query: ${endTime - startTime} ms`);
}

// findUser("pink50@yahoo.com");

// ✅ Function to test query execution time
async function withOutIndex(email) {
  // ✅ Without Index (Collection Scan)
  await User.collection.dropIndexes(); // Dropping all indexes
  const user = await User.find({ email: email }).explain("executionStats");
  console.log("Stats in without Index:", user);
}

// ✅ Function to test query execution time
async function withIndex(email) {
  // ✅ With Index (Index Scan)
  await User.collection.createIndex({ email: 1 }); // Recreating the index
  const user = await User.find({ email: email }).explain("executionStats");
  console.log("Stats in with Index:", user);
}

withOutIndex("pink50@yahoo.com");
