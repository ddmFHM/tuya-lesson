const product = require('../model/product')
const category = require('../model/category')
const { Op } = require('sequelize')

exports.create = async function(data) {
  return await product.findOrCreate({
    where: {
      name: data.name
    },
    defaults: {
      ...data
    }
  })
}

exports.getProducts = async function() {
  return await product.findAndCountAll({
    include: {
      model: category,
      attributes: ['_id', 'name', 'createdAt', 'updatedAt']
    }
  })
}

exports.searchProducts = async function(name) {
  return await product.findAndCountAll({
    where: {
      name: {
        [Op.like]: `%${name}%`
      }
    }
  })
}