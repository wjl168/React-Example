import React, {Component} from 'react'
function UserGreeting(props) {
  return <h1>欢迎回来!</h1>
}
function GuestGreeging(props) {
  return <h1>请登录</h1>
}
function Greeging(props) {
  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeging />
}
function TipsBar({warn}) {
  if (!warn) return null // 阻断不渲染
  return (
    <div>
      已登录！
    </div>
  )
}
class State extends Component{
  constructor (props) {
    super(props)
    this.state={
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState(state=> ({
      isToggleOn: !state.isToggleOn
    }))
    /*this.setState((state, props) => ({ // 带操作计算属性的
      counter: state.counter + props.increment
    }))*/
  }
  render() {
    const { isToggleOn } = this.state
    return (
      <div>
        <TipsBar warn={isToggleOn}/>
        <Greeging isLoggedIn={isToggleOn} />
        <button onClick={this.handleClick}>
          {isToggleOn ? '已登录' : '未登录'}
        </button>
      </div>
    )
  }
}
export default State
