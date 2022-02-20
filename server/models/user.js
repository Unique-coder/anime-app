// Designing our user data base Mongoose Schema

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: string, required: true },
  email: { type: string, required: true },
  password: { type: string, required: true },
  id: { type: string },
});

// Turn Schema into a module
const User = mongoose.model("User", userSchema);

export default User;
