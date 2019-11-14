import React, { useContext } from "react";
import { ColorContent } from "./Color";

const ShowArea = props => {
  const { color } = useContext(ColorContent);
  return <div style={{ color: color }}>字体颜色展示为{color}</div>;
};
export default ShowArea;
