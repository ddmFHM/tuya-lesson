const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    index: './src/index.js',
    about: './src/about.js'
  },
  output: {
    filename: '[name]-[chunkhash:5].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Index',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'About',
      template: './src/about.html',
      filename: 'about.html',
      chunks: ['about']
    }),
    new MiniCssExtractPlugin(),
    new OptimizeCssAssetsPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // 所有公共模块提取到bundle
    }
  }
}