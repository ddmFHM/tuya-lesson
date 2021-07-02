const express = require('express')
const { urlencoded, json } = require('express')
const cors = require('cors')
const app = express()
const port = 80

app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(json())

app.use('/api/user', require('./api/user'))
app.use('/api/category', require('./api/category'))
app.use('/api/product', require('./api/product'))

app.listen(port, () => {
  console.log('服务器已开启');
})