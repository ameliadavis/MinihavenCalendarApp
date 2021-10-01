require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");

const app = express();
app.use(bodyParser.json();

mongoose.connect(process.env.MONGODB_URI,{
    useUnifiedTopology: true, 
    useNewUrlParser: true
}, callback() => console.log("Connected to MongoDB"));

app.listen( 5000, callback() => console.log("server started"));