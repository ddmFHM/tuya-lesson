const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

class myPlugin {
  apply(compiler) {
    console.log('my plugin start')
    compiler.hooks.emit.tap('MyPlugin', compilation => {
      for (const name in compilation.assets) {
        if (name.endsWith('.js')) {
          const contents = compilation.assets[name].source()
          const withoutComments = contents.replace(/\/\*\*+\*\//g, "")
          compilation.assets[name] = {
            source: () => withoutComments,
            size: () => withoutComments.length
          }
        }
      }
    })
  }
}

module.exports = {
  mode: "development",
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'eval',
  devServer: {
    open: true,
    port: 3000,
    hotOnly: true,
    contentBase: path.join(__dirname, 'public'),
    proxy: {
      '/api': {
        target: "https://xxx.xxx.com"
      },
      // 修改主机名
      changeOrigin: true
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 用于生成index.html
    new HtmlWebpackPlugin({
      title: 'webpack-plugin',
      template: './public/index.html'
    }),
    // 生成其他html文件
    new HtmlWebpackPlugin({
      filename: 'about.html',
      title: '多个页面-关于我',
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "public/",
    //       globOptions: {
    //         ignore: [
    //           "**/*.html"
    //         ],
    //       }
    //     }
    //   ]
    // }),
    // new myPlugin()
  ]
}