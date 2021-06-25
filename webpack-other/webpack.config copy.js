const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = (env, argv) => {
  console.log(env, argv)

  const config = {
    output: {
      filename: 'bundle.js',
      publicPath: 'dist/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'webpack-plugin',
        template: './public/index.html'
      })
    ]
  }

  if (env.production) {
    config.mode = "production",
    config.devtool = false,
    config.plugins = [
      ...config.plugins,
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "public/",
            globOptions: {
              ignore: [
                "**/*.html"
              ],
            }
          }
        ]
      })
    ]
  }

  return config
}