import React, { Component } from 'react';
import Code from './Code';
import Sidebar from './Sidebar';

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      getter: null
    }
  }
  register = getter => {
    this.setState({ getter })
  }
  onClick = () => {
    console.log('omkcaikdisaod')
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
