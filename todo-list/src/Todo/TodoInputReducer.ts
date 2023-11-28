export type TodoInputStateType = {
  text: string
} 

// 인풋을 입력하거나 지우거나 하는 액션 발생 
export type TodoInputActionType = {
  type: 'change'
  payroad : string
} | {
  type: 'clear'
}

export const TodoInputReducer = (state:TodoInputStateType, action:TodoInputActionType) => {
  switch(action.type){
    case 'change':
      return{
        text: action.payroad
      }
    case 'clear':
      return {
        text: ''
      }
  }
}