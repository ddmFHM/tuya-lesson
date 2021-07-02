const router = require('express').Router()
const { addUser, getUsers } = require('../../server/user')


// 名称 < 4
// 邮箱格式
// 用户名不重复
router.post('/signup', async (req, res) => {
  let userData = req.body
  let result = await addUser(userData)
  res.send(result)
})

router.post('/signin', async (req, res) => {
  res.send({
    token: "123123123123",
    user: {
      _id: "123123124124",
      name: "ddm",
      email: "ddm@qq.com",
      role: 1
    }
  })
})

module.exports = router