// const onClickHandler = (dir) => {
//   //current distance of the last tag from the right.
//   let distanceRight =
//     mstrRef.current.getBoundingClientRect().width -
//     (chipContainerRef.current.getBoundingClientRect().width -
//       Math.abs(translation));

//   if (dir && translation < 0) {
//     //Clicking on for left arrow
//     translation = translation + 320 > 0 ? 0 : translation + 320;
//     //hide class of the animation
//     if (atEnd) {
//       setButtonClassR("");
//     }
//     distanceRight -= 320;
//   } else if (!dir && !atEnd) {
//     //Clicking on right-arrow
//     translation =
//       distanceRight + 320 > 0 ? translation + distanceRight : translation - 320;

//     //hide class of the animation
//     if (atStart) {
//       setButtonClassL("");
//     }
//     //update the distance to take into account the current translation
//     distanceRight += 320;
//   }

//   //actual translation
//   chipContainerRef.current.style.transform = `
//         translateX(${translation}px)`;

//   // boolean indicating if we're at the start of the tags
//   atStart = translation === 0 ? true : false;
//   console.log("atStart", atStart);

//   // //hide the arrow at begginning
//   // if (atStart) {
//   //   arrLRef.current.style.display = "none";
//   // } else {
//   //   arrLRef.current.style.display = "flex";
//   // }

//   // boolean indicating if we're at the end of the tags
//   atEnd = distanceRight >= 0 ? true : false;
//   console.log("atEnd", atEnd);

//   // //hide the arrow at end
//   // if (atEnd) {
//   //   arrRRef.current.style.display = "none";
//   // } else {
//   //   arrRRef.current.style.display = "flex";
//   // }
// };

const onClickHandler = (dir) => {
  //current distance of the last tag from the right.
  let distanceRight =
    mstrRef.current.getBoundingClientRect().width -
    (chipContainerRef.current.getBoundingClientRect().width -
      Math.abs(translation));

  if (dir && translation < 0) {
    //Clicking on for left arrow
    translation = translation + 320 > 0 ? 0 : translation + 320;
    //hide class of the animation
    if (atEnd) {
      setButtonClassR("");
    }
    distanceRight -= 320;
  } else if (!dir && !atEnd) {
    //Clicking on right-arrow
    translation =
      distanceRight + 320 > 0 ? translation + distanceRight : translation - 320;

    //hide class of the animation
    if (atStart) {
      setButtonClassL("");
    }
    //update the distance to take into account the current translation
    distanceRight += 320;
  }

  //actual translation
  chipContainerRef.current.style.transform = `
        translateX(${translation}px)`;

  // boolean indicating if we're at the start of the tags
  atStart = translation === 0 ? true : false;
  console.log("atStart", atStart);

  // //hide the arrow at begginning
  // if (atStart) {
  //   arrLRef.current.style.display = "none";
  // } else {
  //   arrLRef.current.style.display = "flex";
  // }

  // boolean indicating if we're at the end of the tags
  atEnd = distanceRight >= 0 ? true : false;
  console.log("atEnd", atEnd);

  // //hide the arrow at end
  // if (atEnd) {
  //   arrRRef.current.style.display = "none";
  // } else {
  //   arrRRef.current.style.display = "flex";
  // }
};

export default onClickHandler;
