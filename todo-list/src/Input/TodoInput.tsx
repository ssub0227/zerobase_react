import { RiChatNewLine } from 'react-icons/ri'
import styles from './TodoInput.module.css';
import { ChangeEvent, EventHandler, FormEvent } from 'react'
import { useInputTodoDispatch, useInputTodoState, useTodoDispatch, useTodoState } from '../Todo/TodoProvider';

// text={inputState.text} onSubmit={handleSubmit} onTextChange={handleTextChange}

const TodoInput = () =>{
  const inputDispatch = useInputTodoDispatch()
  const inputState = useInputTodoState()
  const todoDispatch = useTodoDispatch()

  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) =>{
    inputDispatch({
      type:'change',
      payroad: event.target.value
    })
  }

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault()
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

  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
        className={styles.input} 
        placeholder={'해야 할 일'}
        value={inputState.text}
        onChange={handleInputChange}/>
      <button type='submit' className={styles.enter}><RiChatNewLine /></button>
      </form>
    </section>
  )
}

export default TodoInput