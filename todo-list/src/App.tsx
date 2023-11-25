import React from 'react';
import TodoHeader from './Header/TodoHeader'
import TodoInput from './Input/TodoInput'
import './App.css';

function App() {
  return (
    <div className={'App'}>
      <TodoHeader />
      <TodoInput />
    </div>
  );
}

export default App;
