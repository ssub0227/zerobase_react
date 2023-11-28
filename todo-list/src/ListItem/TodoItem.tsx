import { IoCheckmarkCircleOutline   } from "react-icons/io5"
import { IoIosRemoveCircleOutline   } from "react-icons/io"
import styles from './TodoItem.module.css'
import { useTodoDispatch } from "../Todo/TodoProvider"

interface TodoItemProps{
  id:number
  text: string
  isChecked:boolean
}

const TodoItem = (props:TodoItemProps)=>{
  const todoDispatch = useTodoDispatch()

  const handleToggle = () =>{
    todoDispatch({
      type:'checked',
      payload: {
        id: props.id
      }
    })
  }

  const handleRemove = () =>{
    todoDispatch({
      type:'remove',
      payload: {
        id: props.id
      }
    })
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