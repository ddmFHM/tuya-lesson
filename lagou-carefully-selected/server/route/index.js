const express = require('express')
const { urlencoded, json } = require('express')
const cors = require('cors')
const { varifyToken, errorToken } = require('../utils/jwt')
const app = express()
const port = 80

app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(json())

app.use(varifyToken())
app.use('/api', require('./api/sign') )
app.use('/api', require('./api/category') )
app.use('/api', require('./api/product') )
app.use(errorToken)

app.listen(port, () => {
  console.log('服务器已开启');
})