require("dotenv").config();
console.log(process.env.DATABASE_MONGODBATLAS);
const mongoose = require("mongoose");

const url = process.env.DATABASE_MONGODBATLAS || "localhost";

const dbConnection = mongoose.connect(url);

module.exports = dbConnection;
