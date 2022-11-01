var express = require('express');
var router = express.Router();
var Categories = require('../model/db');
var Cate = require('../model/schema_categories');
// // var cors = require('cors')

// Find One
router.get('/:id', getCates, (req, res) => {
    res.send(res.cate.name)
})

//Delete One
// // Deleteing one
router.delete('/:id', getCates, async (req, res) => {
  try {
      await res.cate.remove()
      res.json( { message: 'Deleted cates'})
  }catch (err) {
      res.status(500).json({ message: err.message })
  }
}) 

// Updating one
router.patch('/:id', getCates, async (req, res) => {
  if (req.body.name != null) {
      res.cate.name = req.body.name
  }
  try {
      const updatedSubscriber = await res.cate.save()
      res.json(updatedSubscriber)
  } catch (err) {
      res.status(400).json({ message: err.message })
  }
})

//Find All
router.get('/', async (req, res) => {
  try {
      const cates = await Cate.find()
      res.json(cates)
  }catch (err) {
      res.status(500).json({message: err.message})
  }
})

router.post('/', function(req, res) {
  const categories = new Categories({
    name: req.body.name,
    slug: req.body.slug,
    parent: req.body.parent,
    description: req.body.description,
    thumbnail: req.body.thumbnail,
  })
  categories.save(function(err){
    if (err) {
        throw err;
    }else {
        res.send('Successfully Inserted');
    }
  })
})

async function getCates(req, res, next) {
  let cate
  try {
      cate = await Cate.findById(req.params.id)
      if (cate == null) {
          return res.status(404).json({ message: "No Category found."})
      }
  } catch (err) {
      return res.status(500).json({ message: err.message })
  }
  res.cate = cate
  next()

}

module.exports = router;
