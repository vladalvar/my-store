const { models } = require('./../libs/sequelize');

class OrderProductService {
  constructor() {}

  async create(data) {
    const newItem = await models.OrderProduct.create(data)
    return newItem;
  }

}

module.exports = OrderProductService;
