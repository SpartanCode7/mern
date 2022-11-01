var express = require('express');
var router = express.Router();
var Db = require('../model/db');
var Products = require('../model/schema_products');
// var cors = require('cors')


// Get One
router.get('/:id', getProds, (req, res) => {
  res.send(res.product.name)
})

//Delete One
router.delete('/:id', getProds, async (req, res) => {
  try {
      await res.product.remove()
      res.json( { message: 'Deleted Product'})
  }catch (err) {
      res.status(500).json({ message: err.message })
  }
}) 

// Updating one
router.patch('/:id', getProds, async (req, res) => {
  if (req.body.name != null) {
      res.product.name = req.body.name
  }
  try {
      const updatedSubscriber = await res.product.save()
      res.json(updatedSubscriber)
  } catch (err) {
      res.status(400).json({ message: err.message })
  }
})
  
// Get All
router.get('/', async (req, res) => {
  try {
      const prod = await Products.find()
      res.json(prod)
  }catch (err) {
      res.status(500).json({message: err.message})
  }
})

//Post
router.post('/', function(req, res) {
  const products = new Db({
    name: req.body.name,
    price: req.body.price,
    selectproducts: req.body.selectproducts,
    quantity: req.body.quantity,
    category: req.body.category,
    shortdiscription: req.body.shortdiscription,
    description: req.body.description,
    thumbnail: req.body.thumbnail,
    sub_images: req.body.sub_images,
    sku: req.body.sku,
    tags: req.body.tags,
    shares: req.body.shares,
    additionalinformation: req.body.additionalinformation
  });
  products.save(function(err){
    if (err) {
        throw err;
    }else {
        res.send('Successfully Inserted');
    }
  });
});


// Middleware
async function getProds(req, res, next) {
  let product
  try {
      product = await Products.findById(req.params.id)
      if (product == null) {
          return res.status(404).json({ message: "No Category found."})
      }
  } catch (err) {
      return res.status(500).json({ message: err.message })
  }
  res.product = product
  next()

}

module.exports = router;
