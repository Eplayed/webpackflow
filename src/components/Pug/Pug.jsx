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
          <h1>pug</h1>
          <a href="https://pugjs.org/api/getting-started.html">
            <img src="https://img.shields.io/github/release/pugjs/pug.svg" />
          </a>
        </header>
        <Typography type="body1" component="p">
          pug 是一个深受 haml 影响的高性能模版引擎，它用 javascript 实现并可以在 node.js 和浏览器中运行。
        </Typography>

        <h3>Jade</h3>
        <Typography type="body1" component="p">
          put 以前叫做 jade，因为 jade 的注册商标版权问题，后来改名为 Pug。
        </Typography>
      </Paper>
    )
  }
}

export default Pug
