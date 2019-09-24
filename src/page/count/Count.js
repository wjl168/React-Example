import React, { Component } from 'react'
import  {createStore} from 'redux';

const ActionTypes = {
  ADD_NUM: 'ADD_NUM',
  MINUSE_NUM: 'MINUSE_NUM'
};

const ActionCreators = {
  AddNum(num) {
    return {
      type: ActionTypes.ADD_NUM,
      payload: num
    }
  },
  MinusNum(num) {
    return {
      type: ActionTypes.MINUSE_NUM,
      payload: num
    }
  }
}

// 状态树中就只有一个值 Num的值。
const numReducer = (state=0, action) => {
  switch(action.type) {
    case ActionTypes.ADD_NUM :
      return state + action.payload;
    case ActionTypes.MINUSE_NUM :
      return state - action.payload
    default:
      return state;
  }
};

const store = createStore(numReducer);

class Count extends Component {
  constructor (props, context) {
    super(props, context)
    this.state ={
      Num: 0
    }
  }

  componentDidMount() {
    // 订阅store的变化。
    store.subscribe(() => {
      this.setState({
        Num: store.getState() // 获取最新的state的状态
      })
    });
  }

  render () {
    return (
      <div>
        <p>{ store.getState() }</p>
        <p>{ this.state.Num }</p>
        <button
          onClick={ () => {
            store.dispatch(ActionCreators.AddNum(1))
          }}
        >
          +1
        </button>

        <button
          onClick={ () => {
            store.dispatch(ActionCreators.MinusNum(1))
          }}
        >
          -1
        </button>
      </div>
    )
  }
}

export default Count
