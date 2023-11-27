import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { IoIosRadioButtonOff } from "react-icons/io";
import { FaTrash } from 'react-icons/fa'
import styles from './TodoListTools.module.css'

interface TodoListToolsProps{
  onToggleAllClick: () => void
  onRemoveAllClcck: () => void
  isAllChecked:boolean
}

const TodoListTools = (props:TodoListToolsProps)=>{
  const handletoggleAllClick = () =>{
    props.onToggleAllClick()
  }

  const handleRemoveAllClick = () =>{
    props.onRemoveAllClcck()
  }

  return(
    <section className={styles.container}>
      <button className={styles.button} onClick={handletoggleAllClick}>
      {
        props.isAllChecked ?
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