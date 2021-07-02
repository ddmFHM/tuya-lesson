const category = require('../model/category')

exports.create = async function(data) {
  return await category.findOrCreate({
    where: {
      name: data.name
    },
    defaults: {
      ...data
    }
  })
}

exports.getCategories = async function() {
  return await category.findAndCountAll()
}