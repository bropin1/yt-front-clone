import { React, Fragment } from "react";
import style from "./Video.module.scss";

const Video = (props) => {
  return (
    <Fragment>
      <div className={style.contener}>
        <div className={style.visual}>image and player</div>

        <div className={style.details}>
          <a href="" className={style.avatar}>
            <div className={style.logo}></div>
          </a>

          <div className={style.meta}>
            <a href="" className={style.videoTitle}>
              {" "}
              title
            </a>
            <div className={style.metaData}>channel and views and date</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Video;
