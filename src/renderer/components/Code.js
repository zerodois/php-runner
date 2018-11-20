import React, { Component } from 'react';
import loader from 'monaco-loader';

class Code extends Component {
	state = {
		editor: null
	}
	constructor (props) {
		super()
		props.register(this.getCode)
	}
	getCode = () => {
		return this.state.editor.getValue()
	}
	async componentDidMount () {
		const monaco = await loader()
	  const editor = monaco.editor.create(this.container, {
	    language: 'php',
	    theme: 'vs-dark',
	    automaticLayout: true,
	    value: '<?php\n// Type your code here\n',
		})
		editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
			this.props.onSubmit()
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
