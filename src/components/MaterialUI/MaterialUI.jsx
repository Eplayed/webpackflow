import React, { Component } from 'react'
import { Paper, Typography } from 'material-ui'

import './MaterialUI.styl'

class MaterialUI extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Paper className="materialui">
        <header>
          <h1>material-ui</h1>
          <a href="https://material-ui-next.com/">
            <img src="https://img.shields.io/github/release/mui-org/material-ui.svg" />
          </a>
        </header>
        <Typography type="body1" component="p">
          基于 google material design 实现的 react 组建库
        </Typography>
      </Paper>
    )
  }
}

export default MaterialUI
