import React, { Component } from 'react'
import Code from './Code'
import Sidebar from './Sidebar'
import Output from './Output'
import { to } from '../utils'
import { execute } from '../services/code'

export default class Home extends Component {
  state = {
    getter: null,
    output: false,
    response: null,
    error: null
  }
  register = getter => {
    this.setState({ getter })
  }
  runCode = async () => {
    this.setState({ output: true })
    const [error, response] = await to(execute(this.state.getter()))
    this.setState({ error, response })
  }
  closeOutput = () => {
    this.setState({ output: false, response: null, error: null })
  }
  render () {
    return (
    	<div className="App">
        <Sidebar
          onClick={this.runCode} />
        <section className="flex-1 relative">
          <Code
            onSubmit={this.runCode}
            register={this.register} />
          <Output
            close={this.closeOutput}
            visible={this.state.output}
            error={this.state.error}
            response={this.state.response} />
        </section>
    	</div>
    );
  }
}
