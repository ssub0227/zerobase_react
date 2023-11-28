import React, { useReducer } from 'react'
import TodoHeader from './Header/TodoHeader'
import TodoInput from './Input/TodoInput'
import TodoListTools from './Tools/TodoListTools'
import Divider from './Divider/Divider'
import TodoList from './List/TodoList'
import TodoListArea from './List/TodoListArea'
import { todoInputReducer } from './Todo/TodoInputReducer'
import { TodoReducer } from './Todo/TodoReducer'
import './App.css'


const App = () => {
  // const [text, setText] = useState('')
  // const [todos, setTodos] = useState<TodoType[]>([])
  const [todoState, todoDispatch] = useReducer(TodoReducer, {todos:[]})
  const [inputState, inputDispatch] = useReducer(todoInputReducer, {text: ''})
  const handleTextChange = (text:string) =>{
    inputDispatch({
      type:'change',
      payroad: text
    })
  }

  const handleSubmit = () => {
    if(!inputState.text) return

    todoDispatch({
      type:'add',
      payload: {
        text: inputState.text
      }
    })
    
    inputDispatch({
      type:'clear'
    })
  }

  const handleToggle = (id:number) =>{
    todoDispatch({
      type:'checked',
      payload: {
        id: id
      }
    })
  }

  const handleRemove = (id:number) =>{
    todoDispatch({
      type:'remove',
      payload: {
        id: id
      }
    })
  }

  const isTodoAllChecked = () =>{
    return todoState.todos.every(todo => todo.isChecked)
    //every : 배열안의 모든 요소가 적합한가 true/false 
  }

  const handleAllToggleClick = () =>{
    todoDispatch({
      type: 'allChecked',
      payload: isTodoAllChecked()
    })
  }

  const handleAllRemoveClick = () =>{
    todoDispatch({
      type: 'allRemove',
    })
  }
  
  return (
    <div className={'App'}>
      <TodoHeader count={todoState.todos.filter(todo => !todo.isChecked).length}/>
      <TodoInput text={inputState.text} onSubmit={handleSubmit} onTextChange={handleTextChange} />
      <TodoListArea todoCount={todoState.todos.length} >
        <TodoListTools isAllChecked={isTodoAllChecked()} onToggleAllClick={handleAllToggleClick} onRemoveAllClcck={handleAllRemoveClick}/>
        <Divider />
        <TodoList todos={todoState.todos} onRemoveClick={handleRemove} onToggleClick={handleToggle}/>
      </TodoListArea>
    </div>
  )
}

export default App;
