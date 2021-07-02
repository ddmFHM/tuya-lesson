const product = require('../model/product')
const category = require('../model/category')
const { Op, or } = require('sequelize')

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

exports.getProducts = async function({ limit, sortBy }) {
  let order = []
  if(sortBy === "createdAt") {
    order.push(['createdAt', 'ASC'])
  } else if(sortBy === "sold") {
    order.push(['updatedAt', 'ASC'])
  }
  return await product.findAndCountAll({
    include: {
      model: category,
      attributes: ['_id', 'name', 'createdAt', 'updatedAt']
    },
    limit: +limit,
    order
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

exports.getProduct = async function(_id) {
  return await product.findOne({
    where: {
      _id
    },
    include: {
      model: category,
      attributes: ['_id', 'name', 'createdAt', 'updatedAt']
    }
  })
}