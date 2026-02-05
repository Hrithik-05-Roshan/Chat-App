// const express = require('express'); // Importing the Express library to create a web server
import express from 'express'; 
import dotenv from 'dotenv'; // Importing the dotenv library to manage environment variables

import authRoutes from './routes/auth.route.js'; // Importing authentication routes from a separate file for better organization
import messageRoutes from './routes/message.route.js'; // Importing authentication routes from a separate file for better organization

dotenv.config(); // Loading environment variables from a .env file into process.env
const PORT = process.env.PORT || 3000; // Setting the port for the server to listen on, defaulting to 3000 if not specified in .env


const app = express(); // Creating an instance of the Express application to handle incoming requests and define routes

app.use("/api/auth", authRoutes); // Using the imported authentication routes for any requests that start with "/api/auth"
app.use("/api/messages", messageRoutes);

app.listen(PORT, () =>{  // Starting the server and listening on port 3000 for incoming requests.
    console.log("Server is running on port : " + PORT );   
})
