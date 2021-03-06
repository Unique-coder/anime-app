import express from "express";

import {
  getPostsBySearch,
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
  commentPost,
} from "../controllers/post.js";

import auth from "../middleware/auth.js";

const router = express.Router();

// Based on our app.use route in index.js, all routes will begin with  "http://localhost:5000/posts"

// Get request from user search
router.get("/search", getPostsBySearch);

// Get request from use to a route
router.get("/", getPosts);

router.get("/:id", getPost);

// Post a information to the database of  user
router.post("/", auth, createPost);

// Updating an existing information on the database of  user
router.patch("/:id", auth, updatePost);

// Delete an existing information on the database
router.delete("/:id", auth, deletePost);

// Update like count information on the database
router.patch("/:id/likePost", auth, likePost);

// Update like count information on the database
router.post("/:id/commentPost", auth, commentPost);

export default router;
