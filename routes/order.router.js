const express = require('express');
const validatorHandler = require('./../middlewares/validator.handler');
const OrderService = require('./../services/order.service');

const { getOrderSchema, createOrderSchema } = require('./../schema/order.schema');

const service = new OrderService();
const router = express.Router();

router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id)
      res.json(order);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newOrder = await service.create(body)
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
});

module.exports = router;
