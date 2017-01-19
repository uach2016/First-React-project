import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyComponent from './MyComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

ReactDOM.render(
  <MyComponent />,
  document.getElementById('container')
);