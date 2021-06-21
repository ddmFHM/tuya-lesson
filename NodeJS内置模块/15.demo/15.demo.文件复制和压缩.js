// 将styles 的 style.css 复制到 dist 下

const fs = require('fs')
const path = require('path')

const dist = path.join(__dirname, 'dist')
// 这里的./是相当于当前执行终端路径的./
fs.readFile('./Styles/style.css', (err, data) => {
  if (err) throw err

  let cssData = data.toString().replace(/\s+/g, "").replace(/\/\*{1,2}[\s\S]*\*\//g, '')

  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist)
  }

  fs.writeFile(dist + '/style.css', cssData, (err) => {
    console.log('写入成功')
  })
})