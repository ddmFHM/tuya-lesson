const router = require('express').Router()

router.post('/create/:userId', async (req, res) => {
  res.send({
    sold: 0,
    _id: 1234124,
    name: "sdasd",
    price: 1,
    category: "1241241",
    quantity: 35423,
    shipping: false,
    createAt: "1231",
    updateAt: "1231",
    __v: 0
  })
})

router.get('/search', async (req, res) => {
  res.send([
    {
      sold: 0,
      _id: 1234124,
      name: "srqc nodejs",
      price: 1,
      category: "1241241",
      quantity: 35423,
      shipping: false,
      createAt: "1231",
      updateAt: "1231",
      __v: 0
    },
    {
      sold: 0,
      _id: 233123,
      name: "asdafajl html",
      price: 1,
      category: "1241241",
      quantity: 35423,
      shipping: false,
      createAt: "1231",
      updateAt: "1231",
      __v: 0
    }
  ])
})

router.get('/', async (req, res) => {
  res.send([
    {
      sold: 0,
      _id: 1234124,
      name: "srqc nodejs",
      price: 1,
      description: "描述",
      category: {
        _id: "12314",
        name: "sfaf",
        createAt: "123124",
        updateAt: "123124",
        _v: 0
      },
      quantity: 35423,
      shipping: false,
      createAt: "1231",
      updateAt: "1231",
      __v: 0
      
    }
  ])
})

router.get('/photo/:productId', async(req, res) => {

})

router.get('/products/search')

module.exports = router
