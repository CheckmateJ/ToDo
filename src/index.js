import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import AppContext from './contexts/AppContext';



ReactDOM.render(
  <React.StrictMode>
    <AppContext/>
  </React.StrictMode>,
  document.getElementById('root')
);

