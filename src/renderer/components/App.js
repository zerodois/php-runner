import React, { Component } from 'react'
import Code from './Code'
import Sidebar from './Sidebar'
import { execute } from '../services/code'

export default class App extends Component {
  state = {
    getter: null
  }
  register = getter => {
    this.setState({ getter })
  }
  onClick = () => {
    let p = execute(this.state.getter())
    p.then(console.log).catch(e => console.error(e))
  }
  render () {
    return (
    	<div className="App">
        <Sidebar
          onClick={this.onClick} />
        <Code
          register={this.register} />
    	</div>
    );
  }
}
