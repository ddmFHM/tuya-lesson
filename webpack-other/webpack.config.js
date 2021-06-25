const webpack = require('webpack')

module.exports = {
  mode: "none",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      API_BASE_URL: JSON.stringify('https://api.example')
    })
  ],
  optimization: {
    usedExports: true, //只使用外部导入的成员
    // minimize: true, //去除不用的代码
    concatenateModules: true
  }
}