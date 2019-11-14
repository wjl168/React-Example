import React, { useContext } from "react";
import { ColorContent, UPDATE_COLOR } from "./Color";
// https://codesandbox.io/s/usecontextusereducer-replace-redux-ed9kx
const Buttons = props => {
  const { dispatch } = useContext(ColorContent);
  return (
    <React.Fragment> {/*<React.Fragment> 类似<></> 语法但这种空括号不能接受键值或属性*/}
      <button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "green" });
        }}
      >
        绿色
      </button>
      <button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "yellow" });
        }}
      >
        黄色
      </button>
    </React.Fragment>
  );
};

export default Buttons;
