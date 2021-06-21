const fs = require('fs')

/*  文件操作  */

// 写入文件内容（清空写入，会覆盖原有的）
// fs.writeFile('./1.txt', '测试fs写入', (err) => {
//   if (err) throw err

//   console.log("写入成功")
// })

// 写入文件内容（追加写入）
// fs.appendFile('./1.txt', '\r\n测试追加写入', (err) => {
//   if (err) throw err
//   console.log('追加写入成功')
// })

// 读取文件内容
// fs.readFile('./1.txt', (err, data) => {
//   if (err) throw err
//   // 读出的data 为二进制数据，默认输出时以16进制方式展示。
//   console.log(data.toString())
// })


// 删除文件
// fs.unlink('./1.txt', (err) => {
//   if (err) throw err
//   console.log('删除成功')
// })


/*  目录操作  */

// 创建目录
// fs.mkdir('dir1', (err) => {
//   if (err) throw err
//   console.log('dir1创建成功')
// })

// 删除目录 (只能删除空目录)
// fs.rmdir('dir1', (err) => {
//   if (err) throw err
//   console.log('dir1 删除成功')
// })

// 重命名目录
// fs.rename('dir1', 'renamedir1', (err) => {
//   if (err) throw err
//   console.log('重命名成功')
// })

// 读目录
// fs.readdir('./', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })

// 判断文件类型
// fs.stat('../NodeJS内置模块', (err, stat) => {
//   if (err) throw err
//   console.log(stat.isDirectory())
//   console.log(stat.isFile())
// })
// fs.stat('./1.txt', (err, stat) => {
//   if (err) throw err
//   console.log(stat.isDirectory())
//   console.log(stat.isFile())
// })

// 判断文件是否存在
// console.log(fs.existsSync('1.txt'))
// console.log(fs.existsSync('2.txt'))