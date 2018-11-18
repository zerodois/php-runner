import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
};

// const loader = require('monaco-loader')
// const { remote } = require('electron')

// loader().then((monaco) => {
//   const editor = monaco.editor.create(document.getElementById('container'), {
//     language: 'php',
//     theme: 'vs-dark',
//     automaticLayout: true,
//     value: '<?php\n// Type your code here\n',
//   })
//   remote.getCurrentWindow().show()
// })
