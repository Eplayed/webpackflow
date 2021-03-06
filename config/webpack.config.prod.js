const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: resolve(__dirname, '../src/index.jsx'),
    vendor: [ 'react', 'react-dom', 'material-ui' ]
  },
  output: {
    path: resolve(__dirname, '../build'),
    filename: 'scripts/[chunkhash].js',
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
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
          publicPath: '../',
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [ autoprefixer ]
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
            loader: 'file-loader',
            options: {
              name: 'images/[sha512:hash:base64:8].[ext]',
            }
          }
        ]
      },
      {
        test: /.png$/,
        exclude: [
          resolve(__dirname, '../src/components/PostCssSprite')
        ],
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[sha512:hash:base64:8].[ext]',
              limit: 2000
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
    new webpack.optimize.UglifyJsPlugin({
      comments: false
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/templates/index.pug'),
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true
      }
    }),
    new CopyWebpackPlugin([
      {
        from: resolve(__dirname, '../src/fav.ico')
      }
    ]),
    new ExtractTextPlugin({
      filename: 'stylesheets/[sha512:contenthash:base64:8].css'
    })
  ]
}
