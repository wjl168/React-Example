import { createStore } from 'redux'
import reducer from './reducers'
import actions from "./actions";
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // 调适时 + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// store.getState() 获取整个状态数据对象
// store.dispatch() 分发Action
// store.subscribe() 订阅状态数据的变化
console.log(store.getState())
export default store

