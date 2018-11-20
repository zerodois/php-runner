import React, { Component } from 'react';
import Code from './Code';
import Sidebar from './Sidebar';

export default class App extends Component {
  state = {
    getter: null
  }
  register = getter => {
    this.setState({ getter })
  }
  onClick = () => {
    console.log(this.state.getter())
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
