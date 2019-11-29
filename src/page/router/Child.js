import React from 'react'
import { Link, Route, useParams } from 'react-router-dom';
function Topics({ match, history }) {
  const { url } = match || {}
  return (
    <div>
      <h2>这是一级路由</h2>
      <p><Link to={`${url}/child01`}>子类一</Link></p>
      <button onClick={()=> history.goBack()}>返回</button>
      <button onClick={()=> history.replace(`${url}/child02`)}>事件触发replace到子类二</button>
      <p><Link to={`${url}/child02`}>子类二</Link></p>
      <div>
        <Route path={`${url}/:topicId`} component= {Topic} />
        <Route path={`${url}/:topicId`} children= {<TopicChild />} />
      </div>
    </div>
  )
}
const Topic = ({match}) => {
  return (
    <div>
      component: {match.params.topicId}
    </div>
  )
}
const TopicChild = () => {
  const {topicId} = useParams()
  return (
    <div>
      children(useParams): {topicId}
    </div>
  )
}

export default Topics
