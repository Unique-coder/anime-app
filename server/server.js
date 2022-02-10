import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

// Access the routes by importing it into index.js
import postRoutes from "./routes/posts.js";

const app = express();

// read the “body” of an incoming JSON object.
//// OLD METHOD ///////////
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

////  NEW METHOD VERSION 4.16 +///////////
// app.use(express.json({ limit: "30mb", extended: true }));
// app.use(express.urlencoded({ limit: "30mb", extended: true }));

//allows servers to specify not only who can access the assets, but also how they can be accessed
app.use(cors());

// Set-up the starting route for all route sin post.js
app.use("/posts", postRoutes);

// Connection from out Database cloud. Mongo-DB ATlas
//mongodb://127.0.0.1:27017/memory-app

// Env Const (Get values that should be hidden from env file)
const CONNECTION_URL = "mongodb://127.0.0.1:27017/memory-app";

//Our access port. Changes when we deploy with heroku
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err.message));
