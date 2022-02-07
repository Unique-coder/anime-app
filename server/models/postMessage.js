// Designing our data base Mongoose Schema

// OLD Methods
// const mongoose = require("mongoose");

// New Method
import { Schema, model } from "mongoose";

// Data-Base JSON Schema!!!
const postSchema = Schema({
  title: String,
  message: String,
  creator: String,
  tag: [String],
  selectedFile: String,
  likeCounts: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Turn Schema into a module
const postMessage = model("postMessage", postSchema);

export default postMessage;
