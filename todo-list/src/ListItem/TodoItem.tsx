import { IoCheckmarkCircleOutline   } from "react-icons/io5"
import { IoIosRemoveCircleOutline   } from "react-icons/io"
import styles from './TodoItem.module.css'

interface TodoItemProps{
  text: string
}

const TodoItem = (props:TodoItemProps)=>{
  const isChecked = true
  return(
   <li className={styles.container}>
    <IoCheckmarkCircleOutline className={[styles.circleIcon, `${isChecked? styles.checkedCircleIcon : styles.unCheckedCircleIcon}`].join(' ')} />
    <span>{props.text}</span>
    <IoIosRemoveCircleOutline className={styles.removeIcon} />
   </li>
  )
}

export default TodoItem