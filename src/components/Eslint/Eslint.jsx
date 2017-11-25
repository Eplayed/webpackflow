import React, { Component } from 'react'
import { Paper, Typography } from 'material-ui'

import './Eslint.styl'

class Eslint extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Paper className="eslint">
        <header>
          <h1>eslint</h1>
          <a href="http://postcss.org/">
            <img src="https://img.shields.io/github/release/eslint/eslint.svg" />
          </a>
        </header>
        <Typography type="body1" component="p">
          eslint 最初是由 nicholas c. zakas 于 2013 年 6 月创建的开源项目。它的目标是提供一个插件化的 javascript 代码检测工具。
        </Typography>
      </Paper>
    )
  }
}

export default Eslint
