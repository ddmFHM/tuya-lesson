const path = require('path')

// 获取当前文件所在路径   G:\workspace\tuya-lesson\NodeJS内置模块
console.log(__dirname)

// 获取当前文件路径 (包含当前文件名)  G:\workspace\tuya-lesson\NodeJS内置模块\14.path.js
console.log(__filename)

// 获取文件扩展名 .js
console.log(path.extname(__filename)) 

// 获取路径中目录部分（等于__dirname） G:\workspace\tuya-lesson\NodeJS内置模块
console.log(path.dirname(__filename)) 

// 获取路径中的文件莫 14.path.js
console.log(path.basename(__filename)) 

// 合并路径
console.log(path.join(__dirname, '..', 'NodeJS', '9.js'))