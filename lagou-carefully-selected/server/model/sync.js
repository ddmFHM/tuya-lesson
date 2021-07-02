const sequelize = require('./db')
const user = require('./user')
const product = require('./product')
const category = require('./category')

category.hasMany(product)
product.belongsTo(category)

sequelize.sync({ alter: true }).then(() => {
  console.log('模型同步成功')
})

