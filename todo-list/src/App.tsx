import React, { useState } from 'react'
import TodoHeader from './Header/TodoHeader'
import TodoInput from './Input/TodoInput'
import TodoListTools from './Tools/TodoListTools'
import Divider from './Divider/Divider'
import TodoList from './List/TodoList'
import TodoListArea from './List/TodoListArea'
import './App.css'

export type TodoType = {
  id: number
  text: string
  isChecked: boolean
}

const App = () => {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState<TodoType[]>([])
  const handleTextChange = (text:string) =>{
    setText(text)
  }

  const handleSubmit = () => {
    if(!text) return

    const newTodos = todos.concat({ // concat : 배열에 마지막에 새로운 값을 추가하여 새로운 배열 리턴
      id: Date.now(),
      text:text,
      isChecked:false
    })
    setTodos(newTodos)
    setText('') // 인풋 영역 빈값으로 
  }

  const handleToggle = (id:number) =>{
    const newTodos = todos.map(todo =>{ // 리액트는 새로운 값을 갱신할 때 객체 안에서 찾아서 교체하는 것이 아닌 아예 값을 새로 넘겨줘야만 렌더링이 일어남
      if(todo.id === id){
        return{
          ...todo,
          isChecked: !todo.isChecked
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  const handleRemove = (id:number) =>{
    const newTodos = todos.filter(todo => {
      return todo.id != id // 삭제를 클릭한 아이디가 받아온 아이디와 같을 경우 -> 삭제를 누르지 않은 todo 만 리턴
    })

    setTodos(newTodos)
  }

  const isTodoAllChecked = () =>{
    return todos.every(todo => todo.isChecked)
    //every : 배열안의 모든 요소가 적합한가 true/false 
  }

  const handleAllToggleClick = () =>{
    const isAllChecked = isTodoAllChecked()
    const newTodos = todos.map(todo => {
      return{
        ...todo,
        isChecked: !isAllChecked
      }
    })

    setTodos(newTodos)
  }

  const handleAllRemoveClick = () =>{
    // todos.clear()
    // return setTodos()
  }
  
  return (
    <div className={'App'}>
      <TodoHeader count={todos.filter(todo => !todo.isChecked).length}/>
      <TodoInput text={text} onSubmit={handleSubmit} onTextChange={handleTextChange} />
      <TodoListArea todoCount={todos.length} >
        <TodoListTools isAllChecked={isTodoAllChecked()} onToggleAllClick={handleAllToggleClick} onRemoveAllClcck={handleAllRemoveClick}/>
        <Divider />
        <TodoList todos={todos} onRemoveClick={handleRemove} onToggleClick={handleToggle}/>
      </TodoListArea>
    </div>
  )
}

export default App;
