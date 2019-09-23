import React from 'react'
import { Link, Route } from 'react-router-dom';
function Topics({ match }) {
  const { url } = match || {}
  return (
    <div>
      <h2>这是一级路由</h2>
      <p><Link to={`${url}/child01`}>子类一</Link></p>
      <p><Link to={`${url}/child02`}>子类二</Link></p>
      <div>
        <Route path={`${url}/:topocId`} component= {Topic} />
      </div>
    </div>
  )
}
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topocId}</h3>
  </div>
)
export default Topics
