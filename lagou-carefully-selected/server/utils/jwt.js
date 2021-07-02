const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

/* 加密token密钥 */
const secret = "Secret"
/* 白名单 */
const whitelist = ["/api/signup", "/api/signin", '/api/products/search', '/api/categories', '/api/products']

/**
 * 生成token
 * @param {Object} data token携带数据
 * @param {Number} Expires 过期时间 单位秒
 * @returns {String} token值
 */
exports.createToken = (data, /* 默认token一天 */Expires = 60 * 60 * 24) => {
  let tokenData = {
    data,
    createTime: new Date().getTime()
  }
  return 'Bearer ' + jwt.sign(tokenData, secret, { expiresIn: Expires })
}

/**
 * 验证Token
 * @description 通过req.auth可获取token信息 [设置credentialsRequired属性]
 * @param {String} token 
 * @returns 
 */
exports.varifyToken = () => {
  return expressJWT({
    secret,
    algorithms: ["HS256"],
    getToken(req) {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(" ")[1]
      }
      return null
    }
  }).unless({
    path: whitelist
  })
}

exports.errorToken = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).send({
      code: 0,
      msg: "请先登录"
    })
  }
}

