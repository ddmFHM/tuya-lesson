const router = require('express').Router()
const { signin, signup } = require('../../server/user')
const { createToken } = require('../../utils/jwt')

router.post('/signin', async(req, res) => {
  const { email, password } = req.body
  let result = await signin(email)
  let varifyPassword = result.dataValues.password
  let _id = result.dataValues._id
  if (result && (password === varifyPassword)) {
    let token = createToken({ _id })
    res.send({
      token,
      user: {
        _id: result._id,
        name: result.name,
        email: result.email,
        role: result.role,
      }
    })
  } else {
    res.send({
      message: "账号或密码错误"
    })
  }
 
})

router.post('/signup', async(req, res) => {
  const data = req.body
  let result = await signup(data)
  if(result[1]) {
    res.send(result[0])
  } else {
    res.status(403).send({
      message: "邮箱重复"
    })
  }
})

module.exports = router