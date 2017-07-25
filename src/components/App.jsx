import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBar from './TopBar'
import MenuDrawer from './MenuDrawer'

import '../stylesheets/App'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { menuDrawOpened: false }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TopBar onLeftIconButtonTouchTap={ () => { this.setState(prevState => ({ menuDrawOpened: !prevState.menuDrawOpened })) } } />
          <MenuDrawer
            onRequestChange={ menuDrawOpened => this.setState({ menuDrawOpened }) }
            docked={ false }
            open={ this.state.menuDrawOpened } />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
