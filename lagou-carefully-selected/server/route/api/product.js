const router = require('express').Router()
const { create, getProducts, searchProducts } = require('../../server/product')

router.post('/product/create/:userId', async(req, res) => {
  let data = req.body
  let result = await create(data)
  if(result[1]) {
    res.send(result[0])
  } else {
    res.status(403).send({
      message: "商品已存在" 
    })
  }
})

router.get('/products', async(req, res) => {
  let result = await getProducts()
  if(result) {
    res.send([
      ...result.rows
    ])
  } else {
    res.send([])
  }
})

router.get('/products/search', async(req, res) => {
  let result = await searchProducts(req.query.search)
  if(result) {
    res.send([
      ...result.rows
    ])
  } else {
    res.send([])
  }
})

module.exports = router