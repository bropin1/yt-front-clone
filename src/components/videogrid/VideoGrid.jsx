import React, { Fragment } from "react";
import style from "./VideoGrid.module.scss";
import Video from "./video/Video.jsx";
const videoList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
];

const VideoGrid = () => {
  const videoLayout = [];
  let tempContener = [];
  let n = 4;
  let count = 0;

  videoList.map((vid) => {
    if (count % n === 0) {
      videoLayout.push(<div className={style.row}>{tempContener}</div>);
      tempContener = [];
    }
    tempContener.push(<Video name="CLEM" />);
    count++;
  });

  //use for in for loop and use the variable of the first loop to indicate the span of the second one
  // ie: if i=0 in first loop i[0,3] in the second
  // if i=1 i[4,7]

  return (
    <Fragment>
      <div className={style.container}>{videoLayout}</div>
    </Fragment>
  );
};

export default VideoGrid;
