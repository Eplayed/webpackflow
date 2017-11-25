import React, { Component } from 'react'
import { Paper, Typography } from 'material-ui'

import './Stylus.styl'

class Stylus extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Paper className="stylus">
        <header>
          <h1>stylus</h1>
          <a href="http://stylus-lang.com/">
            <img src="https://img.shields.io/github/release/stylus/stylus.svg" />
          </a>
        </header>
        <Typography type="body1" component="p">
          stylus 是一个革命性的新语言，提供高效，动态，以及富有表现力的方式来生成 css。缩进语法和传统 css 风格都支持。
        </Typography>
      </Paper>
    )
  }
}

export default Stylus
