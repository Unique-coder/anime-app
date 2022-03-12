// Designing our post data base Mongoose Schema

// OLD Methods
// const mongoose = require("mongoose");

// New Method
import mongoose from "mongoose";

// Data-Base JSON Schema!!!
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  comments: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Turn Schema into a module
const postMessage = mongoose.model("postMessage", postSchema);

export default postMessage;
