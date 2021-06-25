const marked = require('marked')

module.exports = source => {

  // source 源码字符串
  const html = marked(source)

  // 方法1 处理源码，导出标准ES代码
  // return `module.exports=${JSON.stringify(html)}`

  // 方法2 将得到的html 交给下一个loader
  return html
}