const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class OrderService {
  constructor() {}


  async find(){
    const orders = await models.Order.findAll();
    return orders;
  }

  async findOne(id){
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    });
    if(!order) {
      throw boom.notFound();
    }
    return order;
  }

  async create(data) {
    const newOrder = await models.Order.create(data)
    return newOrder
  }

  async addItem(data) {
    const newOrderProduct = await models.OrderProduct.create(data);
    return newOrderProduct;
  }

  async update(id, changes){
    const order = await this.find(id);
    const rta = order.update(changes);
    return rta;
  }

  async delete(id){
    const order = await this.find(id);
    await order.destroy();
    return id;
  }
}

module.exports = OrderService;
