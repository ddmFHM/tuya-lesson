const router = require('express').Router()
const multer = require('multer')
const { create, getProducts, searchProducts, getProduct } = require('../../server/product')
const path = require('path')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/upload'))
  },
  filename: function(req, file, cb) {
      const timeStamp = Date.now()
      const randomStr = Math.random().toString(36).slice(-3)
      const ext = path.extname(file.originalname)
      const filename = `ty_${timeStamp}_${randomStr}${ext}`
      req.filename = filename
      cb(null, filename)
  }
})

const upload = multer({ storage })

router.post('/product/create/:userId', upload.single('photo'), async(req, res) => {
  let data = req.body
  data.photo = req.filename
  console.log(data)
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
  const { limit = 4, sortBy = "" } = req.query
  let result = await getProducts({ limit, sortBy })
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

router.get('/product/:id', async(req, res) => {
  let id = req.params.id
  let result = await getProduct(id)
  res.send(result.dataValues)
})

module.exports = router