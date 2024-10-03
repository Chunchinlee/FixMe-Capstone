// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './App'; // Make sure to import AppWrapper

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);
