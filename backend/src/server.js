// const express = require('express'); // Importing the Express library to create a web server
import express from "express";
import dotenv from "dotenv"; // Importing the dotenv library to manage environment variables

import authRoutes from "./routes/auth.route.js"; // Importing authentication routes from a separate file for better organization
import messageRoutes from "./routes/message.route.js"; // Importing authentication routes from a separate file for better organization

import path from "path"; // Importing the path module to work with file and directory paths

dotenv.config(); // Loading environment variables from a .env file into process.env
const PORT = process.env.PORT || 3000; // Setting the port for the server to listen on, defaulting to 3000 if not specified in .env

const app = express(); // Creating an instance of the Express application to handle incoming requests and define routes
const __dirname = path.resolve();

app.use("/api/auth", authRoutes); // Using the imported authentication routes for any requests that start with "/api/auth"
app.use("/api/messages", messageRoutes);

// make deployment ready
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist"))); // Serving static files from the "dist" directory of the frontend build when in production mode

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  // Starting the server and listening on port 3000 for incoming requests.
  console.log("Server is running on port : " + PORT);
});
