import express from "express";

import { getPosts } from "../controllers/post.js";

const router = express.Router();

// Based on our app.use rout in index.js, all r0utes will begin with  "http://localhost:5000/posts"

router.get("/", getPosts);

export default router;
