import { IoCheckmarkCircleOutline   } from "react-icons/io5"
import { IoIosRemoveCircleOutline   } from "react-icons/io"
import styles from './TodoItem.module.css'

interface TodoItemProps{
  id:number
  text: string
  isChecked:boolean
  onToggleClick: (id:number) => void
  onRemoveClick: (id:number) => void
}

const TodoItem = (props:TodoItemProps)=>{
  const handleToggle = () =>{
    props.onToggleClick(props.id)
  }

  const handleRemove = () =>{
    props.onRemoveClick(props.id)
  }

  return(
   <li className={styles.container}>
    <IoCheckmarkCircleOutline 
    onClick={handleToggle}
    className={[styles.circleIcon, `${props.isChecked? styles.checkedCircleIcon : styles.unCheckedCircleIcon}`].join(' ')} />
    <span>{props.text}</span>
    <IoIosRemoveCircleOutline 
      onClick={handleRemove}
    className={styles.removeIcon} />
   </li>
  )
}

export default TodoItem