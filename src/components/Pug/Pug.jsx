import React, { Component } from 'react'
import { Paper, Typography } from 'material-ui'

import './Pug.styl'

class Pug extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Paper className="pug">
        <header>
          <h1>Pug</h1>
          <a href="https://pugjs.org/api/getting-started.html">
            <img src="https://img.shields.io/github/release/pugjs/pug.svg" />
          </a>
        </header>
        <Typography type="body1" component="p">
          Pug 是一个深受 Haml 影响的高性能模版引擎，它用 JavaScript 实现并可以在 Node.js 和浏览器中运行。
        </Typography>

        <h3>Jade</h3>
        <Typography type="body1" component="p">
          Pug 以前叫做 Jade，因为 Jade 的注册商标版权问题，后来改名为 Pug。
        </Typography>
      </Paper>
    )
  }
}

export default Pug
