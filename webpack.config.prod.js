const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: resolve(__dirname, 'src/index.jsx'),
    vendor: [ 'react', 'react-dom' ]
  },
  output: {
    path: resolve(__dirname, 'build'),
    filename: '[chunkhash].js',
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.styl' ]
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        use: [ 'babel-loader' ]
      },
      {
        test: /.pug$/,
        use: [ 'pug-loader' ]
      },
      {
        test: /.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
          ]
        })
      },
      {
        test: /.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[sha1:hash:base64:8].[ext]',
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: [ 'vendor', 'manifest' ]
    }),
    new webpack.optimize.UglifyJsPlugin({ comments: false }),

    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/templates/index.pug'),
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true
      }
    }),
    new CopyWebpackPlugin([
      {
        from: resolve(__dirname, 'src/assets'),
        to: resolve(__dirname, 'build/assets')
      }
    ]),
    new ExtractTextPlugin({
      filename: '[contenthash].css'
    })
  ]
}
