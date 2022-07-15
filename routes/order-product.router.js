const express = require('express');
const validatorHandler = require('./../middlewares/validator.handler');
const OrderProductService = require('./../services/order-product.service');
const { addItemSchema } = require('../schema/order-product.schema')
const service = new OrderProductService();
const router = express.Router();

router.post('/',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newItem = await service.create(body)
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
});

module.exports = router;
