const express = require('express')
const { urlencoded, json, static } = require('express')
const cors = require('cors')
const { varifyToken, errorToken } = require('../utils/jwt')
const path = require('path')
const app = express()
const port = 80

const staticRoot = path.resolve(__dirname, '../public')
app.use(static(staticRoot))
app.use('/public', static(staticRoot))

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