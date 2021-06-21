const http = require('http')

// 创建服务器
// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain; charset=utf-8')
//   res.end('hello world node 你好')
// })

// 发部web服务
// server.listen(12345, 'localhost', () => {
//   console.log('port 12345 已启动')
// })

setTimeout(() => {
  console.log(123)
}, 2000);

setImmediate(() => {
  console.log(111)
})