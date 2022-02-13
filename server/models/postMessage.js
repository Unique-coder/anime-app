// Designing our data base Mongoose Schema

// OLD Methods
// const mongoose = require("mongoose");

// New Method
import mongoose from "mongoose";

// Data-Base JSON Schema!!!
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Turn Schema into a module
const postMessage = mongoose.model("postMessage", postSchema);

export default postMessage;
