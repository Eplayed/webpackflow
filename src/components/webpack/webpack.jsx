import React, { Component } from 'react'

class Webpack extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <header>
          <h1>webpack</h1>
          <a href="https://webpack.js.org">
            <img src="https://img.shields.io/github/release/webpack/webpack.svg" />
          </a>
        </header>
        <div>webpack 是一个现代 JavaScript 应用程序的模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成少量的 bundle - 通常只有一个，由浏览器加载。</div>
      </div>
    )
  }
}

export default Webpack
