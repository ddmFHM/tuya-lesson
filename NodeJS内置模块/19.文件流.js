const fs = require('fs')

// 创建读取流
var readStream = fs.createReadStream('./file.txt')

// 创建写入流
var writeStream = fs.createWriteStream('./file_stream.txt')

// 把读取流通过管道传给写入流
readStream.pipe(writeStream)