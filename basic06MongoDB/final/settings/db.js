const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.MONGODB_URI || "mongodb://localhost:27017";

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            dbName: "pokemon",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        })

        console.log("mongodb connected...");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;