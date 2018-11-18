import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
};
