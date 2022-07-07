const express = require('express');
// const CategoryService = require('../services/categories.service');

const router = express.Router();
// const service = new CategoryService();

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
});


module.exports = router;
