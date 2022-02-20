// For setting up all our user post routes endpoints. This way, we dont crowd out route/user file but import all the route endpoints in our controller.

// Used to has the password of our users.
import bcrypt from "bcryptjs";

// Safe way to store users in a browser for a period of time. If user leaves file he will still stay logged in
import jwt from "jsonwebtoken";

// Import schema module from our model folder
import User from "../models/user.js";

// Sign in function
export const signin = async (req, res) => {
  // Get email and password details form the post req data
  const { email, password } = req.body;

  try {
    // check if user.email exist
    const existingUser = await User.findOne({ email });

    // json response message if no such user.email is found
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist'" });

    // check if user.password is correct with the existing password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    // json response message if password is incorrect
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Credentials." });

    // Get jsonwebtoken and send t the frontend. Information to store in the token, + secret key string, + How long to stay logged in
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "Unique",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Sign up function
export const signup = async (req, res) => {
  // Get email,password and etc details form the post req data
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    // check if user is an existing user. Wh? to not duplicate email addresses!
    const existingUser = await User.findOne({ email });

    // json response message if such user email is already in database
    if (existingUser)
      return res.status(400).json({ message: "User already exist" });

    //Check if the password and confirm password dont match
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password is not the same" });

    // Hash the password using bcrypt. password,+salt(level of hashing difficulty).
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create our user object with all the information on the database
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    // Get jsonwebtoken and send t the frontend. Information to store in the token, + secret key string, + How long to stay logged in
    const token = jwt.sign({ email: result.email, id: result._id }, "Unique", {
      expiresIn: "1h",
    });

    res.status(200).json({ result: result, token: token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
