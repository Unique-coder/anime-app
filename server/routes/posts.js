import express from "express";

import { getPosts, createPost } from "../controllers/post.js";

const router = express.Router();

// Based on our app.use rout in index.js, all routes will begin with  "http://localhost:5000/posts"

// Get request from use to a route
router.get("/", getPosts);

// Post a information to the database of  user
router.get("/", createPost);

export default router;
