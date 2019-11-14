import React, { useState , useEffect, createContext, useContext} from 'react';
import { Color } from "../color/Color"
import ShowArea from "../color/ShowArea"
import Buttons from "../color/Buttons"
/*function FriendStatus(props) {
  const [isOnline,setIsOnline] = useState(null)
  useEffect(()=> {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
    return () => {
      ChatAPI.unsubscribeToFriendStatus(props.friend.id, handleStatusChange)
    }
  })
  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  )
}*/


const CountContext = createContext() //函数创建context
function Counter(){ // 省去props
  const count = useContext(CountContext)  //useContext可以得到count
  return (<h2>{count}</h2>)
}
function Count(){
  const [ count , setCount ] = useState(0);
  const [ sex , setSex ] = useState('男');
  //---关键代码---------start-------
  useEffect(()=>{
    console.log(`useEffect=>You clicked ${count} times`)
    return () => {
      console.log('解绑count')
    }
  },[count]) // 传入count解绑
  //---关键代码---------end-------
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>性别：{sex}</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
      // 获取countContext
      {<Counter />}
      <CountContext.Provider value={count}>
         {<Counter />}
      </CountContext.Provider>

      <Color>
        <ShowArea />
        <Buttons/>
      </Color>
    </div>
  )
}
export default Count;
