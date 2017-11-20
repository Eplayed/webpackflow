import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import {
  Index,
  Webpack,
  CssSprite,
  ReactPage
} from './app'

class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Index } />
          <Route path="/webpack" component={ Webpack } />
          <Route path="/csssprite" component={ CssSprite } />
          <Route path="/react" component={ ReactPage } />
        </div>
      </Router>
    )
  }
}

export default Routers
