import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/mongo-relationship")
  .then(() => console.log("MongoDB connected Successfully!!"))
  .catch((err) => console.log("MongoDB Connection Failed", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const postSchema = new mongoose.Schema({
  content: String,
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

async function createUser(name, email, age) {
  const newUser = new User({
    name: name,
    email: email,
    age: age,
  });

  await newUser.save();
  console.log(newUser);
}

async function createPost(content, user) {
  const newPost = new Post({
    content: content,
    user: user,
  });

  await newPost.save();
  console.log(newPost);
}

async function getPosts() {
  const posts = await Post.find().populate("user", "-age");
  console.log(posts);
}

// createUser("Tejas", "code@gmail.com", 25);

// createPost("Content 2", "696068b640cfac98d6a68f79");

getPosts();
