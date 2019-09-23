import React, {Component} from 'react'
function Dialog(props) {
  const {children} = props
  return (
    <div>
      {children}
    </div>
  )
}
function Pannel(props) {
  const {left, right} = props
  return (
    <div>
      <hr/>
      <div>这是具名的插槽</div>
      <div className='sideLeft'>{left}</div>
      <div className='sideContent'>{right}</div>
    </div>
  )
}
function SideLeft() {
  return (
    <div>sideMenu</div>
  )
}
function SideContent() {
  return (
    <div>正文</div>
  )
}
class ChildOrSlot extends Component {
  render() {
    return (
      <div>
        <Dialog>
          <h3>默认props.children</h3>
          <div>类似插槽slot</div>
        </Dialog>
        <Pannel left={<SideLeft />} right={<SideContent />} />
      </div>
    )
  }
}

export default ChildOrSlot
