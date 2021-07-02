const sequelize = require('./db')
const { DataTypes } = require('sequelize')

module.exports = sequelize.define('category', {
  _id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  createdAt: true,
  updatedAt: true,
  paranoid: true
})