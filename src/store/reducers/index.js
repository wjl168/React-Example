// 定义默认状态
import {ADD_TODO, TOGGLE_COMPLETE, CHANGE_DISPLAY} from "../actions/action-type";
let initState = {
  display: 'completed',
  todos: [
    {
      id: parseInt(Math.random() * 10000000),
      isComplete: false,
      title: 'learn redux'
    },
    {
      id: parseInt(Math.random() * 10000000),
      isComplete: true,
      title: 'learn react'
    },
    {
      id: parseInt(Math.random() * 10000000),
      isComplete: false,
      title: 'learn node'
    }
  ]
}


function reducer (state=initState, action) {
  let newState
  switch (action.type) {
    case TOGGLE_COMPLETE:
      newState = {
        todos: state.todos.map(item => {
          if (item.id == action.payload) {
            item.isComplete = !item.isComplete;
          }
          return item;
        })
      };
      break;
    case ADD_TODO:
      newState = {
        todos: [
          ...state.todos,
          action.playload
        ]
      }
      break
    case CHANGE_DISPLAY:
      newState = {
        display: action.payload,
        todos: [...state.todos]
      };
      break;
    default:
      newState = state
      break
  }
  return newState
}
export default reducer
