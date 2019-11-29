import React, {Component} from 'react'
import { List, Avatar, Button, Skeleton } from 'antd'
import FormValidate from './FormValidate'
function Item(props) {
  if (!props.data.length) return null
  return (
    <ol>
      {
        props.data.map((item, index)=> (
          <li key={index}>
            <p>input:{item.title}</p>
            <p>textarea:{item.content}</p>
            <p>select: {item.select}</p>
            <p>file: {item.fileName}</p>
            <p>imgPreview: {item.img}</p>
            <p>checkbox: {item.checkbox}</p>
          </li>
        ))
      }
    </ol>
  )
}
class Forms extends Component{
  constructor (props) {
    super(props)
    this.state = {
      value: '名称',
      text: '留言',
      sleV: 'red',
      isGoing: true,
      list: [],
      imagePreviewUrl: ''
    }
    this.fileInput = React.createRef() // 非受控组件ref创建
    this.handleChange = this.handleChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }
  handleImageChange(e) {
    e.preventDefault()
    let reader = new FileReader();
    let file = e.target.files[0]
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  handleSubmit (e) {
    e.preventDefault()
    const {value, text, sleV, isGoing, imagePreviewUrl} = this.state
    this.setState({list: [{
        title: value,
        content: text,
        select: sleV,
        fileName: this.fileInput.current.files[0] && this.fileInput.current.files[0].name,
        checkbox: isGoing ? '选中' : '未选中',
        img: <img style={{width: '50px', height: 'auto'}} src={imagePreviewUrl} />
      }, ...this.state.list]})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name='value' onChange={this.handleChange}/>
          <br />
          <textarea value={this.state.text} name='text' onChange={this.handleChange} />
          <br />
          <select value={this.state.sleV} name='sleV' onChange={this.handleChange}>
            <option value='green'>绿色</option>
            <option value='red'>红色</option>
          </select>
          <br />
          <input type='file' accept="image/*" ref={this.fileInput} onChange={this.handleImageChange} />
          <br/>
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleChange} />
          <input type="submit" value='提交' />
        </form>
        <Item data={this.state.list} />
        <FormValidate />

      </div>
    )
  }
}
export default Forms
