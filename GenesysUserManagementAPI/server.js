const express = require('express');
const app = express();
const PORT = 3000;

// TODO -- Create Schemas for user objects, e.g. user.name has to be a string and email has to follow the correct conventions
// and validate each user objects before passing request into controller

// Create our own environment variables in .env file
const dotEnv = require('dotenv');
dotEnv.config();

// Connecting to database
const databaseConnection = require('./database/connection');
databaseConnection();

// Parsing request, responses to json format
app.use(express.json());

// User Management System API--v1 base route, all further user endpoints in ./Routes/userRoutes
app.use('/api/v1/users', require('./Routes/userRoutes'));


// Create additional base paths below as needed

// Running server
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})
 
