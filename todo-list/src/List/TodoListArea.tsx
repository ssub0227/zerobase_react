import { ReactNode } from 'react'

interface TodoListProps{
  children:ReactNode
  todoCount: number
}

// High Order Component (HOC)

const TodoListArea = (props:TodoListProps) =>{
if(props.todoCount < 1){
  return null
}

  return(
  <>
    {props.children}
  </>
  )
}


export default TodoListArea