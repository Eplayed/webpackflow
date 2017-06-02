import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { GridList, GridTile } from 'material-ui/GridList'
import '../stylesheets/App'

class App extends React.Component {
  state = {
    open: false,
  }

  handleOpen = () => { this.setState({ open: true }) }

  handleClose = () => { this.setState({ open: false }) }

  render() {
    const actions = [
      <FlatButton
        key="first"
        label="关闭"
        primary={ true }
        onTouchTap={ this.handleClose }
      />,
      <FlatButton
        key="second"
        label="确认"
        primary={ true }
        keyboardFocused={ true }
        onTouchTap={ this.handleClose }
      />,
    ]

    return (
      <MuiThemeProvider>
        <div className="app">
          <h1>webpackflow</h1>
          <div>
            <GridList
              cols={ 1 }
              cellHeight="auto"
            >
              <GridTile>
                <RaisedButton
                  label="Click Me!"
                  primary={ true }
                  onTouchTap={ this.handleOpen }
                />
              </GridTile>
            </GridList>
            <Dialog
              title="webpackflow"
              actions={ actions }
              modal={ false }
              open={ this.state.open }
              onRequestClose={ this.handleClose }
            >
              欢迎~，很高兴你使用 webpackflow!!!
            </Dialog>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
