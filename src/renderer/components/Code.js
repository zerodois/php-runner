import React, { Component } from 'react';
import loader from 'monaco-loader';

class Code extends Component {
	async componentDidMount () {
		const monaco = await loader()
	  const editor = monaco.editor.create(this.container, {
	    language: 'php',
	    theme: 'vs-dark',
	    automaticLayout: true,
	    value: '<?php\n// Type your code here\n',
	  })
	}
	render () {
		return (
			<div id="container" ref={cont => (this.container = cont)} />
		);
	}
}

export default Code;
