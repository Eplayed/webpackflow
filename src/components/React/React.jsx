import React, { Component } from 'react'
import { Paper, Typography } from 'material-ui'

import './React.styl'

class ReactPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Paper className="react">
        <header>
          <h1>react</h1>
          <a href="https://reactjs.org/">
            <img src="https://img.shields.io/github/release/facebook/react.svg" />
          </a>
        </header>
        <Typography type="body1" component="p">
          react 是用于构建用户界面的 JavaScript 库
        </Typography>

        <h3>声明式</h3>
        <Typography type="body1" component="p">
          react 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 react 也可以高效地更新渲染界面。以声明式编写 ui，可以让你的代码更加可靠，且方便调试。
        </Typography>

        <h3>组件化</h3>
        <Typography type="body1" component="p">
          创建好拥有各自状态的组件，再由组件构成更加复杂的界面。无需再用模版代码，通过使用 javascript 编写的组件你可以更好地传递数据，将应用状态和 dom 拆分开来。
        </Typography>

        <h3>一次学习，随处编写</h3>
        <Typography type="body1" component="p">
          无论你现在正在使用什么技术栈，你都可以随时引入 react 开发新特性。react 也可以用作开发原生应用的框架 react native.
        </Typography>
      </Paper>
    )
  }
}

export default ReactPage
