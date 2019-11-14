import React, { createContext, useReducer} from 'react'
export const ColorContent = createContext({}) // 创建context
export const UPDATE_COLOR = "UPDATE_COLOR";
const reducer = (state, action) => {
  let newState
  switch (action.type) {
    case UPDATE_COLOR:
      newState = action.color
      break
    default:
      newState = state
      break
  }
  return newState
}

export const Color = props => {
  const [color, dispatch] = useReducer(reducer, 'red')
  return (
    <ColorContent.Provider value={{color, dispatch}}>
      {props.children}
    </ColorContent.Provider>
  )
}
