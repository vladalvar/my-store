const express = require('express');
const CategoryService = require('../services/category.service');

const router = express.Router();
const service = new CategoryService();

router.get('/',
async (req, res, next) => {
  try {
    const categories = await service.find();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});


router.get('/:id',
 async (req, res, next) => {
  try {
    const { id } = req.params
    const category = await service.findOne(id);
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
});

router.post('/',
async (req, res, next) => {
  try {
    const body = req.body;
    const category = await service.create(body);
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } =  req.params;
    const body = req.body;
    const category = await service.update(id, body);
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    return res.status(200).json(id)
  } catch (error) {
    next(error);
  }
});


module.exports = router;
