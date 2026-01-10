import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 5 },
  deliveryAddress: {},
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

const User = mongoose.model("User", userSchema);

export default User;
