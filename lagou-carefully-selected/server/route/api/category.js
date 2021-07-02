const router = require('express').Router()
const { create, getCategories } = require('../../server/category')

router.post('/category/create/:userId', async(req, res) => {
  let data = req.body
  let result = await create(data)
  if(result[1]) {
    res.send(result[0])
  } else {
    res.status(403).send({
      message: "分类已存在"
    })
  }
})

router.get('/categories', async(req, res) => {
  let result = await getCategories()
  if(result) {
    res.send([
      ...result.rows
    ])
  } else {
    res.send([])
  }
})

module.exports = router