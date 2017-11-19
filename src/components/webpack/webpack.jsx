import React, { Component } from 'react'
import { Paper, Typography } from 'material-ui'

import './webpack.styl'

class Webpack extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Paper className="webpack">
        <header>
          <Typography type="headline" component="h1">webpack</Typography>
          <a href="https://webpack.js.org">
            <img src="https://img.shields.io/github/release/webpack/webpack.svg" />
          </a>
        </header>
        <Typography type="body1" component="p">
          webpack 是一个现代 JavaScript 应用程序的模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成少量的 bundle - 通常只有一个，由浏览器加载。
        </Typography>
      </Paper>
    )
  }
}

export default Webpack
