import React from 'react';
import TodoHeader from './Header/TodoHeader'
import TodoInput from './Input/TodoInput'
import TodoListTools from './Tools/TodoListTools'
import Divider from './Divider/Divider'
import './App.css';

function App() {
  return (
    <div className={'App'}>
      <TodoHeader />
      <TodoInput />
      <TodoListTools />
      <Divider />
    </div>
  );
}

export default App;
