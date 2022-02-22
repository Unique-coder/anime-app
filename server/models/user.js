// Designing our user data base Mongoose Schema

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

// Turn Schema into a module
export default mongoose.model("User", userSchema);

// export default User;
