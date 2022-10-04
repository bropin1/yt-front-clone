import React from "react";
import style from "./SideElement.module.scss";
const SideElement = (props) => {
  const icon = props.svg;
  const url = props.link;
  const title = props.title;

  return (
    <div className={style.sideElement}>
      <a href="">
        <div className={style.svgWrapper}>{icon}</div>
        <span className={style.title}>{title}</span>
      </a>
    </div>
  );
};

export default SideElement;
