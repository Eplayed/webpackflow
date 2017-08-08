import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Index, Webpack, CssSprite } from './app'

class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Index } />
          <Route path="/webpack" component={ Webpack } />
          <Route path="/css-sprite" component={ CssSprite } />
        </div>
      </Router>
    )
  }
}

export default Routers
