const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include:[ {model: Product,
      through: ProductTag,
      as: "product_tags"}]
    }).then(dbTagData => 
      res.json(dbTagData))
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where:{
      id: req.params.id
    },
    include:[ {model: Product,
      through: ProductTag,
      as: "product_tags"}]
    }).then(dbTagData =>{
      if(!dbTagData){
        res.statusCode(404).json({message: "no tag found with that id"})
      } res.json(dbTagData)
      
});
})
router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
