import express from "express";
import User from "../model/users.js";
import bcrypt from "bcrypt";

const router = express.Router();

//Register Route
router.post("/", async (req, res) => {
  const { name, email, password, deliveryAddress } = req.body;

  const user = await User.findOne({ email: email });

  if (user) {
    return res
      .status(400)
      .json({ message: "User already exist with this email." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name: name,
    email: email,
    password: hashedPassword,
    deliveryAddress: deliveryAddress,
  });

  await newUser.save();

  res.status(201).json({ message: "User register successfully.", newUser });
});

export default router;
