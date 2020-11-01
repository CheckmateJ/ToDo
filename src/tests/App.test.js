import { render, screen } from '@testing-library/react';
import React from 'react';
import { shallow } from 'enzyme';
import TodoContext from '../contexts/TodoContext';
import TodoList from '../components/TodoList';

it('renders without crashing', () => {
  shallow(<TodoContext />);
});
it('includes input', () => {
  const app = shallow(<TodoContext />);
  expect(app.containsMatchingElement(<input />)).toEqual(true)
});
it('includes TodoList', () => {
  const app = shallow(<TodoContext />);
  expect(app.containsMatchingElement(<TodoList />)).toEqual(true)
});
// it('the tasks array is empty', () => {
//   const tasksList = shallow(<TodoContext />);

// });
