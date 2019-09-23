import React, {Component} from 'react'
import {connect} from 'react-redux'
import actions from "../../store/actions";
class Todo extends Component{
  constructor (props) {
    super(props)
    this.changeRadio = this.changeRadio.bind(this)
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
