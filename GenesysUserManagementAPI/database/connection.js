const mongoose = require('mongoose');

// Connecting to database with mongoose
module.exports = async () => {
    try{
        await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useFindAndModify: false});
        console.log("Connected to database");
    } catch (error){
        console.log("Database Connectivity Error", error);
        throw new Error(error);
    }
}