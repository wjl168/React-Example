import React, {Component} from 'react'
function TempText(props) {
  const {temp} = props
  return temp > 100 ? '开水' : temp > 50 ? '热水' : temp > 30 ?  '温水' : '凉水'
}
class TempInput extends Component {
  constructor(props) {
    super(props)
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(e) {
    this.props.onTempInputChange(e.target.value)
  }
  render() {
    return (
      <input value={this.props.temp} onChange={this.handleChange}/>
    )
  }
}
class InputGroup extends Component {
  constructor(props) {
    super(props)
    this.handleChangeOne = this.handleChangeOne.bind(this)
    this.handleChangeTwo = this.handleChangeTwo.bind(this)
    this.state = {
      temp: '',
      scale: 'c'
    }
  }
  handleChangeOne (temp) {
    this.setState({
      scale: 'c',
      temp
    })
  }
  handleChangeTwo (temp) {
    this.setState({
      scale: 'f',
      temp
    })
  }
  render() {
    let {temp, scale} = this.state
    temp = parseFloat(temp)
    temp = isNaN(temp) ? '' : temp
    const cV = scale === 'f' ? temp - 2 : temp
    const fV = scale === 'c' ? temp + 2 : temp
    return (
      <div>
        <TempInput scale='c' temp={cV} onTempInputChange={this.handleChangeOne} />
        <TempInput scale='f' temp={fV} onTempInputChange={this.handleChangeTwo}/>
        <TempText temp={temp} />
      </div>
    )
  }
}
export default InputGroup
