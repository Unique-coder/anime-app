import express from "express";

import { getPosts, createPost, updatePost } from "../controllers/post.js";

const router = express.Router();

// Based on our app.use rout in index.js, all routes will begin with  "http://localhost:5000/posts"

// Get request from use to a route
router.get("/", getPosts);

// Post a information to the database of  user
router.post("/", createPost);

// Updating an existing information to the database of  user
router.patch("/:id", updatePost);

export default router;
