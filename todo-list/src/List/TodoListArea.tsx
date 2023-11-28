import { ReactNode } from 'react'
import { useTodoState } from '../Todo/TodoProvider'

interface TodoListProps{
  children:ReactNode
}

// High Order Component (HOC)
const TodoListArea = (props:TodoListProps) =>{
  const todoState = useTodoState()
  
  if(todoState.todos.length < 1){
    return null
  }

  return(
  <>
    {props.children}
  </>
  )
}


export default TodoListArea