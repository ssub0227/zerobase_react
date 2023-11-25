import React from 'react'
import TodoHeader from './Header/TodoHeader'
import TodoInput from './Input/TodoInput'
import TodoListTools from './Tools/TodoListTools'
import Divider from './Divider/Divider'
import TodoList from './List/TodoList'
import './App.css'

function App() {
  return (
    <div className={'App'}>
      <TodoHeader />
      <TodoInput />
      <TodoListTools />
      <Divider />
      <TodoList />
    </div>
  )
}

export default App;
