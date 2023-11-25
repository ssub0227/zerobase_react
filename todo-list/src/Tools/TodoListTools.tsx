import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { FaTrash } from 'react-icons/fa'
import styles from './TodoListTools.module.css'

const TodoListTools = ()=>{
  return(
    <section className={styles.container}>
      <button className={styles.button}><IoCheckmarkDoneCircleOutline className={styles.checkAllIcon} />전체완료</button>
      <button className={[styles.button, styles.removeAllButton].join(' ')}><FaTrash className={styles.removeAllIcon}/>전체삭제</button>
    </section>
  )
}

export default TodoListTools