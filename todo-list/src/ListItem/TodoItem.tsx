import { IoCheckmarkCircleOutline   } from "react-icons/io5"
import { IoIosRemoveCircleOutline   } from "react-icons/io"
import styles from './TodoItem.module.css'

interface TodoItemProps{
  text: string
  isChecked:boolean
}

const TodoItem = (props:TodoItemProps)=>{
  return(
   <li className={styles.container}>
    <IoCheckmarkCircleOutline className={[styles.circleIcon, `${props.isChecked? styles.checkedCircleIcon : styles.unCheckedCircleIcon}`].join(' ')} />
    <span>{props.text}</span>
    <IoIosRemoveCircleOutline className={styles.removeIcon} />
   </li>
  )
}

export default TodoItem