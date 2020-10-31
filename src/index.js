import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TodoContext from './TodoContext';

ReactDOM.render(
  <React.StrictMode>
    <TodoContext />
  </React.StrictMode>,
  document.getElementById('root')
);

