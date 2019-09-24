import React, {Component} from 'react'
import {connect} from 'react-redux'
import actions from "../../store/actions";
import store from "../../store";
class Todo extends Component{
  constructor (props) {
    super(props)
    this.changeRadio = this.changeRadio.bind(this)
  }
  componentDidMount() {
    // store.dispatch({type: 'CHANGE_DISPLAY', payload: 'uncompleted'})
    store.dispatch(actions.changeDisplay('uncompleted')) // 与上面结果一致
    let unsubscribe = store.subscribe(() => // 监听
      console.log(store.getState()) // 数据变化
    );
// unsubscribe() // 执行解除监听
    store.subscribe(() => {
      console.log(store.getState())
    })
  }
  //按display条件过滤数据
  changeRadio (event){
    this.props.changeDisplay(event.target.value)
  }
  filterDisplay() {
    return this.props.todos.filter(item => {
      switch (this.props.display) {
        case 'completed':
          return item.isComplete;
        case 'uncompleted':
          return !item.isComplete;
        case 'all':
        default:
          return true;
      }
    });
  }
  render() {
    return (<div>
      redux connect todos: {JSON.stringify(this.props.todos)}
      <hr />
      <p><label><input type="radio" name='display' value='all' onClick={this.changeRadio}/>all</label></p>
      <p><label><input type="radio" name='display' value='completed' onClick={this.changeRadio}/>completed</label></p>
      <p><label><input type="radio" name='display' value='uncompleted' onClick={this.changeRadio}/>uncompleted</label></p>
      filter: {JSON.stringify(this.filterDisplay())}
    </div>) // this.props.todos就是从connect传入的state数据
  }
}
export default connect(state => ({
  ...state //此时的state就是todos:[...]数据
}), actions)(Todo) //第二个参数传入actionCreators
