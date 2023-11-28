import TodoProvider from './Todo/TodoProvider'
import TodoHeader from './Header/TodoHeader'
import TodoInput from './Input/TodoInput'
import TodoListTools from './Tools/TodoListTools'
import Divider from './Divider/Divider'
import TodoList from './List/TodoList'
import TodoListArea from './List/TodoListArea'
import './App.css'


const App = () => {
  return (
    <div className={'App'}>
      <TodoProvider>
        <TodoHeader/>
        <TodoInput />
        <TodoListArea >
          <TodoListTools/>
          <Divider />
          <TodoList/>
        </TodoListArea>
      </TodoProvider>
    </div>
  )
}

export default App;
