const express = require('express');
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./catageries.router');
const customersRouter = require('./customer.router');
const OrdersRouter = require('./order.router');
const OrderProduct = require('../routes/order-product.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);

  router.use('/users', usersRouter);
  router.use('/orders', OrdersRouter);
  router.use('/customers', customersRouter);
 router.use('/order-product', OrderProduct);

}

module.exports = routerApi;
