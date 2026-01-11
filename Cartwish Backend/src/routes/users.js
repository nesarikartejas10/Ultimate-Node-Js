import express from "express";
import User from "../model/users.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/auth.js";

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

  const token = generateToken({ _id: newUser._id, name: newUser.name });

  res
    .status(201)
    .json({ message: "User register successfully.", newUser, token: token });
});

//login route
router.post("/login", async (req, res) => {
  //find the user from database by email
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(401).json({ message: "Invalid Credentials." });
  }
  //compare encrypted password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: "Invalid Credentials." });
  }
  //create jwt token and send it in response
  const token = generateToken({ _id: user._id, name: user.name });

  res
    .status(201)
    .json({ message: "User login successfully.", user, token: token });
});

//protected route
router.get("/", authMiddleware, async (req, res) => {
  const user = await User.findOne({ _id: req.user._id }).select("-password");
  res.status(200).json(user);
});

//generate jwt token
function generateToken(data) {
  return jwt.sign(data, process.env.JWT_KEY, {
    expiresIn: "2h",
  });
}

export default router;
