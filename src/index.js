import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import TodoContext from './contexts/TodoContext';
import Navi from './components/Navi';

ReactDOM.render(
  <React.StrictMode>
    <Navi/>
    <TodoContext />
  </React.StrictMode>,
  document.getElementById('root')
);

