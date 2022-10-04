import { React, Fragment } from "react";
import style from "./Chip.module.scss";
const Tag = (props) => {
  return (
    <Fragment>
      <div className={style.chip} tabIndex="0">
        <div className={style.text}>{props.name}</div>
      </div>
    </Fragment>
  );
};

export default Tag;
