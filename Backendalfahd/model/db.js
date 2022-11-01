// require("dotenv").config(); 

// var express = require('express');
const mongoose = require('mongoose');
const cats = require('./schema_categories');
const prods = require('./schema_products');

mongoose.connect(
    "mongodb+srv://spartan:spartan143@cluster0.e6i1l8j.mongodb.net/?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => console.log("Database connected!"))
.catch(err => console.log(err));; 

module.exports = mongoose;
module.exports = cats;
module.exports = prods;