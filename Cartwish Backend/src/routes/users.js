import express from "express";
import User from "../model/users.js";

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

  const newUser = new User({
    name: name,
    email: email,
    password: password,
    deliveryAddress: deliveryAddress,
  });

  await newUser.save();

  res.status(201).json({ message: "User register successfully.", newUser });
});

export default router;
