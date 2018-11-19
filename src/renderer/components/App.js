import React, { Component } from 'react';
import Code from './Code';
import Sidebar from './Sidebar';

export default class App extends Component {
  render() {
    return (
    	<div className="App">
        <Sidebar />
    		<Code />
    	</div>
    );
  }
}
