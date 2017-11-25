import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import {
  Index,
  Webpack,
  PostCssSprite,
  ReactPage,
  Pug,
  Stylus,
  PostCSS,
  Eslint,
  MaterialUI
} from './app'

class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Index } />
          <Route path="/webpack" component={ Webpack } />
          <Route path="/PostCssSprite" component={ PostCssSprite } />
          <Route path="/react" component={ ReactPage } />
          <Route path="/pug" component={ Pug } />
          <Route path="/stylus" component={ Stylus } />
          <Route path="/postcss" component={ PostCSS } />
          <Route path="/eslint" component={ Eslint } />
          <Route path="/materialui" component={ MaterialUI } />
        </div>
      </Router>
    )
  }
}

export default Routers
