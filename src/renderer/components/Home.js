import React, { Component } from 'react'
import Code from './Code'
import Sidebar from './Sidebar'
import Output from './Output'
import { execute } from '../services/code'

export default class Home extends Component {
  state = {
    getter: null
  }
  register = getter => {
    this.setState({ getter })
  }
  runCode = () => {
    let p = execute(this.state.getter())
    p.then(console.log).catch(e => console.error(e))
  }
  render () {
    return (
    	<div className="App">
        <Sidebar
          onClick={this.runCode} />
        <section className="flex-1">
          <Output />
          <Code
            onSubmit={this.runCode}
            register={this.register} />
        </section>
    	</div>
    );
  }
}
