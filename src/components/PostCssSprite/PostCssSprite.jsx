import React, { Component } from 'react'
import { Paper, Typography } from 'material-ui'

import './PostCssSprite.styl'

class PostCssSprite extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Paper className="csssprite">
        <header>
          <h1>post-css-sprite</h1>
          <a href="https://github.com/2createStudio/postcss-sprites">
            <img src="https://img.shields.io/github/release/2createStudio/postcss-sprites.svg" />
          </a>
        </header>
        <Typography type="body1" component="p">
          css sprites 在国内很多人叫 css 精灵，是一种网页图片应用处理方式。它允许你将一个页面涉及到的所有零星图片都包含到一张大图中去，这样一来，当访问该页面时，载入的图片就不会像以前那样一幅一幅地慢慢显示出来了。对于当前网络流行的速度而言，不高于 200kb 的单张图片的所需载入时间基本是差不多的，所以无需顾忌这个问题。
        </Typography>
        <h3>小栗子</h3>
        <Typography type="body1" component="p">
          {
            [ 1, 2, 3, 4, 5 ].map(num => {
              return (
                <i
                  className={ `icon icon${ num }` }
                  key={ num }
                ></i>
              )
            })
          }
        </Typography>
      </Paper>
    )
  }
}

export default PostCssSprite
