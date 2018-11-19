import React, { Component } from 'react';
import loader from 'monaco-loader';

class Code extends Component {
	constructor () {
		super()
		this.state = {
			editor: null
		}
	}
	async componentDidMount () {
		const monaco = await loader()
	  const editor = monaco.editor.create(this.container, {
	    language: 'php',
	    theme: 'vs-dark',
	    automaticLayout: true,
	    value: '<?php\n// Type your code here\n',
		})
		this.setState({ editor })
	}
	render () {
		return (
			<div
				className="Code"
				id="container"
				ref={cont => (this.container = cont)} />
		);
	}
}

export default Code;
