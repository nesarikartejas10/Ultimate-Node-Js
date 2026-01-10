import express from "express";
import User from "../model/users.js";
import bcrypt from "bcrypt";
import Joi from "joi";

const router = express.Router();

const createUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  deliveryAddress: Joi.string().min(5).required(),
});

//Register Route
router.post("/", async (req, res) => {
  const { name, email, password, deliveryAddress } = req.body;

  const joiValidation = createUserSchema.validate(req.body);

  if (joiValidation.error) {
    return res.status(400).json(joiValidation.error.details[0].message);
  }

  // res.json(joiValidation);

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
