import { React } from "react";
import styleB from "./ButtonHover.module.scss";

const ButtonHover = (props) => {
  return (
    <button className={`${props.className} ${styleB.button}`}>
      {props.children}
      <div className={styleB.text}>{props.text}</div>
    </button>
  );
};

export default ButtonHover;
//how will the classNames react
//need the style
//need the text to put
