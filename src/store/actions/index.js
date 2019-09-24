import {ADD_TODO, TOGGLE_COMPLETE, CHANGE_DISPLAY} from "./action-type";
let actions = {
  addTodo (payload) {
    return {
      type: ADD_TODO,
      payload
    }
  },
  toggleComplete (payload) {
    return {
      type: TOGGLE_COMPLETE,
      payload
    }
  },
  //payload为以下3个值（all,uncompleted,completed）
  changeDisplay (payload) {
    return {
      type: CHANGE_DISPLAY,
      payload
    };
  }
}
export default actions
