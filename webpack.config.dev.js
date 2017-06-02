const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    resolve(__dirname, 'src/index.jsx')
  ],
  output: {
    filename: '[name].js'
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.styl' ]
  },
  performance: false,
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    host: '0.0.0.0',
    inline: true,
    compress: true,
    port: 8080,
    contentBase: resolve(__dirname, 'src')
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        use: [ 'babel-loader' ]
      },
      {
        test: /.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true
            }
          }
        ]
      },
      {
        test: /.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                require('autoprefixer')()
              ]
            }
          },
          'stylus-loader'
        ],
        include: [
          resolve(__dirname, 'src/stylesheets')
        ]
      },
      {
        test: /.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/templates/index.pug')
    })
  ]
}
