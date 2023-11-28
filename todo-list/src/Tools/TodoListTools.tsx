import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { IoIosRadioButtonOff } from "react-icons/io";
import { FaTrash } from 'react-icons/fa'
import styles from './TodoListTools.module.css'
import { useTodoDispatch, useTodoState } from '../Todo/TodoProvider';

const TodoListTools = ()=>{
  const todoState = useTodoState()
  const todoDispatch = useTodoDispatch()

  const isTodoAllChecked = () =>{
    return todoState.todos.every(todo => todo.isChecked)
    //every : 배열안의 모든 요소가 적합한가 true/false 
  }

  const handleToggleAllClick = () =>{
    todoDispatch({
      type: 'allChecked',
      payload: isTodoAllChecked()
    })
  }

  const handleRemoveAllClick = () =>{
    todoDispatch({
      type: 'allRemove',
    })
  }

  return(
    <section className={styles.container}>
      <button className={styles.button} onClick={handleToggleAllClick}>
      {
        isTodoAllChecked() ?
        <>
          <IoIosRadioButtonOff className={styles.checkAllIcon} /> 전체해제
        </>
        :
        <>
          <IoCheckmarkDoneCircleOutline className={styles.checkAllIcon} /> 전체완료
        </>
      }
        </button>
      <button onClick={handleRemoveAllClick}
      className={[styles.button, styles.removeAllButton].join(' ')}>
        <FaTrash className={styles.removeAllIcon}/>
        전체삭제
        </button>
    </section>
  )
}

export default TodoListTools