// const db = require('./db')
const mongoose = require('mongoose');

const productsSchema = {
    name: String,
    price: Number,
    selectproducts: String,
    quantity: Number,
    category: String,
    shortdiscription: String,
    description: String,
    thumbnail: Object,
    sub_images: String,
    sku: String,
    tags: String,
    shares: String,
    additionalinformation: String
 }; 

 const products = mongoose.model("products", productsSchema);

module.exports = products;





