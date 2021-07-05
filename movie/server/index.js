const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev: true })

const handler = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/hello', (req, res) => {
    res.send('hello')
  })

  server.get('*', (req, res) => {
    handler(req, res)
  })

  server.listen(3000, () => console.log('服务器启动成功'))
})