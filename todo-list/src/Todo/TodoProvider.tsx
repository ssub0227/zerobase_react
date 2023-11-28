import { createContext, ReactNode, useReducer, Dispatch, useContext } from 'react'
import { TodoReducer, TodoStateType, TodoActionType } from './TodoReducer'
import { TodoInputReducer, TodoInputStateType, TodoInputActionType } from './TodoInputReducer'

interface TodoProviderProps {
  children: ReactNode
}

const TodoStateContext = createContext<TodoStateType | null>(null)
const TodoDispatchContext = createContext<Dispatch<TodoActionType> | null>(null)
const InputTodoContext = createContext<TodoInputStateType | null>(null)
const InputTodoDispatchContext = createContext<Dispatch<TodoInputActionType> | null>(null)

const TodoProvider = (props:TodoProviderProps) =>{
  // const [text, setText] = useState('')
  // const [todos, setTodos] = useState<TodoType[]>([])
  const [todoState, todoDispatch] = useReducer(TodoReducer, {todos:[]})
  const [inputState, inputDispatch] = useReducer(TodoInputReducer, {text: ''})

  return(
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={todoDispatch}>
        <InputTodoContext.Provider value={inputState}>
          <InputTodoDispatchContext.Provider value={inputDispatch}>
            {props.children}
          </InputTodoDispatchContext.Provider>
        </InputTodoContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export const useTodoState = () => { //커스텀 훅
  const value = useContext(TodoStateContext)
  if (!value){ // null 인 경우
    throw new Error('cannot find TodoState')
  }
  return value
}

export const useTodoDispatch = () => { //커스텀 훅
  const value = useContext(TodoDispatchContext)
  if (!value){ // null 인 경우
    throw new Error('cannot find TodoDispatch')
  }
  return value
}
export const useInputTodoState = () => { //커스텀 훅
  const value = useContext(InputTodoContext)
  if (!value){ // null 인 경우
    throw new Error('cannot find InputTodoState')
  }
  return value
}
export const useInputTodoDispatch = () => { //커스텀 훅
  const value = useContext(InputTodoDispatchContext)
  if (!value){ // null 인 경우
    throw new Error('cannot find InputTodoDispatch')
  }
  return value
}
export default TodoProvider