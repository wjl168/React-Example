import {ADD_TODO, TOGGLE_COMPLETE, CHANGE_DISPLAY} from "./action-type";
let actions = {
  addTodo (playload) {
    return {
      type: ADD_TODO,
      playload
    }
  },
  toggleComplete (playload) {
    return {
      type: TOGGLE_COMPLETE,
      playload
    }
  },
  //payload为以下3个值（all,uncompleted,completed）
  changeDisplay (payload) {
    console.log(payload)
    return {
      type: CHANGE_DISPLAY,
      payload
    };
  }
}
export default actions
