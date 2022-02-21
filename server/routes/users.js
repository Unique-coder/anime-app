import express from "express";

import { signin, signup } from "../controllers/user.js";

// Based on our app.use route in index.js, all routes will begin with  "http://localhost:5000/user" to login or sign-up user
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);

export default router;
