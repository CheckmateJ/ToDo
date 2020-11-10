import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import TodoContext from './contexts/TodoContext';
import CategoryContext from './contexts/CategoryContext';


ReactDOM.render(
  <React.StrictMode>
    <TodoContext/>
  </React.StrictMode>,
  document.getElementById('root')
);

