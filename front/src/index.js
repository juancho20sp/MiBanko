import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.$dir="http://localhost:3000/"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
