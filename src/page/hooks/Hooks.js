import React, { useState , useEffect } from 'react';
function Count(){
  const [ count , setCount ] = useState(0);
  const [ sex , setSex ] = useState('男');
  //---关键代码---------start-------
  useEffect(()=>{
    console.log(`useEffect=>You clicked ${count} times`)
    return () => {
      console.log('解绑count')
    }
  },[count])
  //---关键代码---------end-------

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>性别：{sex}</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
  )
}
export default Count;
