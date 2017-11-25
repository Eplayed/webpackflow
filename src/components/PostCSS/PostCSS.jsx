import React, { Component } from 'react'
import { Paper, Typography } from 'material-ui'

import './Postcss.styl'

class PostCSS extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Paper className="postcss">
        <header>
          <h1>postcss</h1>
          <a href="http://postcss.org/">
            <img src="https://img.shields.io/github/release/postcss/postcss.svg" />
          </a>
        </header>
        <Typography type="body1" component="p">
          postcss 是一个允许使用 js 插件转换样式的工具。 这些插件可以检查（lint）你的 js，支持 js variables 和 mixins， 编译尚未被浏览器广泛支持的先进的 css 语法，内联图片，以及其它很多优秀的功能。
        </Typography>
        <Typography type="body1" component="p">
          postcss 在工业界被广泛地应用，其中不乏很多有名的行业领导者，如：维基百科，twitter，阿里巴巴， jetbrains。postcss 的 autoprefixer 插件是最流行的 css 处理工具之一。
        </Typography>
      </Paper>
    )
  }
}

export default PostCSS
