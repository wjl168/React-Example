import React from 'react'
function NumberList(props) {
  const listItem = props.data.map((item,index) => (
    <li key={index}>{item}</li>
  ))
  return (
    <ul>
      {listItem}
    </ul>
  )
}
const numbers = Array(90).fill(1)
export default function () {
  return <NumberList data={numbers} />
}
