const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(/*数据库名*/ 'lagou', /*用户名*/ 'root', /*密码*/ '123456', {
    host: 'localhost',  
    dialect: 'mysql',
    /* 东八时区 */
    // timezone: "+8:00",
    /* 日志输出 */
    logging: false
})

module.exports = sequelize