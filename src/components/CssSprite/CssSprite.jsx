import React, { Component } from 'react'

import './CssSprite.styl'

class CssSprite extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>css-sprite</h1>
        <i className="icon icon1"></i>
        <i className="icon icon2"></i>
      </div>
    )
  }
}

export default CssSprite
