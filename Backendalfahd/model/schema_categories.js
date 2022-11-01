// const db = require('./db')
const mongoose = require('mongoose');

const categorySchema = {
    name: String,
    slug: String,
    parent: Boolean,
    description: String,
    thumbnail: String
 }; 

 const categories = mongoose.model("categories", categorySchema);

module.exports = categories;





