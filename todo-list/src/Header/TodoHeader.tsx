import styles from  './TodoHeader.module.css'
import { useTodoState } from '../Todo/TodoProvider'

const TodoHeader = () =>{
  const todoState = useTodoState()

  const count = todoState.todos.filter(todo => !todo.isChecked).length
  return (
    <header>
      <h1 className={styles.headerTitle}>
        <mark className={styles.todoCount}>{count}</mark>개의 할 일
      </h1>
    </header>
  )
}

export default TodoHeader