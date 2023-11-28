export type TodoType = {
  id: number
  text: string
  isChecked: boolean
}

export type TodoStateType = {
  todos: TodoType[]
}

// add, remove, checked, allChecked, allRemove
export type TodoActionType = {
  type: 'add'
  payload: {
    text: string
  }
}|{
  type: 'remove'
  payload:{
    id: number
  }
}|{
  type: 'checked'
  payload:{
    id: number
  }
}|{
  type: 'allChecked'
  payload:boolean
}|{
  type: 'allRemove'
}

export const TodoReducer = (state: TodoStateType, action: TodoActionType) =>{
  switch(action.type){
    case 'add':
      return {
        todos : state.todos.concat({ // concat : 배열에 마지막에 새로운 값을 추가하여 새로운 배열 리턴
          id: Date.now(),
          text:action.payload.text,
          isChecked:false
        })
      }
    case 'remove':
      return {
        todos : state.todos.filter(todo => {
          return todo.id != action.payload.id // 삭제를 클릭한 아이디가 받아온 아이디와 같을 경우 -> 삭제를 누르지 않은 todo 만 리턴
        })
      }
    case 'checked':
      return {
        todos: state.todos.map(todo =>{ // 리액트는 새로운 값을 갱신할 때 객체 안에서 찾아서 교체하는 것이 아닌 아예 값을 새로 넘겨줘야만 렌더링이 일어남
          if(todo.id === action.payload.id){
            return{
              ...todo,
              isChecked: !todo.isChecked
            }
          }
    
          return todo
        })
      }
    case 'allChecked':
      return {
        todos: state.todos.map(todo => {
          return{
            ...todo,
            isChecked: !action.payload
          }
        })
      }
    case 'allRemove':
      return {
        todos: []
      }
  }
}