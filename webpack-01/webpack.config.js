const path = require('path')
module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    // path: path.join(__dirname, 'output'),
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /.html$/,
        use: {
          loader: 'html-loader',
          options: {
            sources: {
              list: [
                "...",
                {
                  tag: 'a',
                  attribute: 'href',
                  type: 'src'
                }
              ]
            }
          }
        }
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.jpg$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 10 * 1024 // 限制为30kb, 若超出则会自动去使用file-loader
          }
        }
      }
    ]
  }
}