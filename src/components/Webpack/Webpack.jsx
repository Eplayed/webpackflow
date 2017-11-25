import React, { Component } from 'react'
import { Paper, Typography } from 'material-ui'

import './Webpack.styl'

class Webpack extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Paper className="webpack">
        <header>
          <h1>webpack</h1>
          <a href="https://webpack.js.org">
            <img src="https://img.shields.io/github/release/webpack/webpack.svg" />
          </a>
        </header>
        <Typography type="body1" component="p">
          本质上，webpack 是一个现代 JavaScript 应用程序的模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。
        </Typography>
      </Paper>
    )
  }
}

export default Webpack
