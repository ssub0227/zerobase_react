import { TodoType } from "./TodoReducer";

export const saveTodos = (todos: TodoType[]) =>{
  localStorage.setItem('todos', JSON.stringify(todos)) // 객체를 문자열로 
}

export const loadTodos = () =>{
  const todoJson = localStorage.getItem('todos') 

  if(!todoJson){
    return []
  }

  try{
    return JSON.parse(todoJson) // 문자열을 객체로 
  } catch (e) {
    console.error(e)
    return []
  }
}