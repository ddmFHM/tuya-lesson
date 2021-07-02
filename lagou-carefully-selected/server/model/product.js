const sequelize = require('./db')
const { DataTypes } = require('sequelize')

module.exports = sequelize.define('product', {
  _id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  shipping: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  createdAt: true,
  updatedAt: true,
  paranoid: true
})