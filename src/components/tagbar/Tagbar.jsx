import { React, Fragment, useState, useRef, useCallback } from "react";
import style from "./Tagbar.module.scss";
import Chip from "./chip/Chip.jsx";
import { useEffect } from "react";

import {
  disableScrolling,
  enableScrolling,
} from "../../utils/ScrollingBehavior/scrollingBehavior.jsx";

let chipList = [];
const nameList = [
  "Tous",
  "Mix",
  "Musique",
  "Jeux Vidéo",
  "Blender",
  "Programmation",
  "Graphisme",
  "En direct",
  "Illustration",
  "Film de superhéros",
  "Regardée",
  "Nouveauté",
  "Adobe",
  "Création de jeux vidéo",
  "Bande son",
];
// const linkList = ["test1", "test2", "test3"];

nameList.map((e) => {
  return chipList.push({ name: e, link: "", key: Math.random() });
});

let atEnd = false;
let atStart = true;
let translation = 0;
let distanceFromRight;

const Tagbar = (props) => {
  const [buttonClassL, setButtonClassL] = useState("");
  const [buttonClassR, setButtonClassR] = useState("");
  const scrollContainerRef = useRef();
  const chipContainerRef = useRef();
  const mstrRef = useRef();
  const arrLRef = useRef();
  const arrRRef = useRef();

  const preventScroll = (e) => {
    e.preventDefault();
  };

  const onMouseLeaveHandle = useCallback((e) => {
    // enableScrolling();
    props.mainBodyRef.current.removeEventListener("wheel", preventScroll);
    window.removeEventListener("wheel", horizontalScroll);
  }, []);

  const onMouseEnterHandle = useCallback((e) => {
    props.mainBodyRef.current.addEventListener("wheel", preventScroll);
    window.addEventListener("wheel", horizontalScroll);
  }, []);

  const horizontalScroll = (e) => {
    const scrollAmount = e.deltaY;
    const exTranslationR =
      mstrRef.current.getBoundingClientRect().width -
      scrollContainerRef.current.getBoundingClientRect().width;

    translation += scrollAmount;
    distanceFromRight = exTranslationR - translation;
    atStart = false;
    atEnd = false;
    if (translation >= 0) {
      // scroll is positive going to the left
      translation = 0;
      atStart = true;
    } else if (distanceFromRight >= 0) {
      translation = exTranslationR;
      atEnd = true;
    }

    if (atStart) {
      arrLRef.current.style.display = "none";
    } else {
      arrLRef.current.style.display = "flex";
    }
    if (atEnd) {
      arrRRef.current.style.display = "none";
    } else {
      arrRRef.current.style.display = "flex";
    }

    scrollContainerRef.current.style.transform = `
        translateX(${translation}px)`;
  };

  //function to scroll the tagbar on click
  const onClickHandler = (dir) => {
    //current distance of the last tag from the right.
    const exTranslationR =
      mstrRef.current.getBoundingClientRect().width -
      scrollContainerRef.current.getBoundingClientRect().width;

    //bug left arrow not working in full screen
    if (dir === "left") {
      translation += 320;
      //hide class of the animation
      // distanceFromRight -= 320;
    } else if (dir === "right") {
      //Clicking on right-arrow
      translation -= 320;
      //hide class of the animation
    }
    distanceFromRight = exTranslationR - translation;

    if (translation > 0) {
      translation = 0;
    }

    if (distanceFromRight > 0) {
      translation = exTranslationR;
    }

    if (atEnd) {
      setButtonClassR("");
    }
    if (atStart) {
      setButtonClassL("");
    }

    //actual translation
    scrollContainerRef.current.style.transform = `
        translateX(${translation}px)`;

    // boolean indicating if we're at the start of the tags

    atStart = translation === 0 ? true : false;

    //hide the arrow at begginning
    if (atStart) {
      arrLRef.current.style.display = "none";
    } else {
      arrLRef.current.style.display = "flex";
    }

    // boolean indicating if we're at the end of the tags
    atEnd = distanceFromRight >= 0 ? true : false;

    //hide the arrow at end
    if (atEnd) {
      arrRRef.current.style.display = "none";
    } else {
      arrRRef.current.style.display = "flex";
    }
  };

  //Hiding the class to avoid the css animation on Click to happen on page load change of display
  const buttonInitHandle = (dir) => {
    if (dir === "left") {
      setButtonClassL(style.clicked);
    } else if (dir === "right") {
      setButtonClassR(style.clicked);
    }
  };

  return (
    <Fragment>
      <div
        className={style.mstrContainer}
        ref={mstrRef}
        onMouseEnter={onMouseEnterHandle}
        onMouseLeave={onMouseLeaveHandle}
      >
        <div className={style.wrapper}>
          <div className={style.leftArrow} ref={arrLRef}>
            <div className={style.buttonWrapper}>
              <button
                className={buttonClassL}
                onMouseDown={() => {
                  buttonInitHandle("left");
                }}
                onClick={() => {
                  onClickHandler("left");
                }}
              >
                <svg
                  viewBox="0 0 16 16"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <g mirror-in-rtl="">
                    <path d="M10.15,13.35L4.79,8l5.35-5.35l0.71,0.71L6.21,8l4.65,4.65L10.15,13.35z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>

          <div className={style.scrollContainer} ref={scrollContainerRef}>
            <div className={style.chipWrapper} ref={chipContainerRef}>
              {chipList.map((e) => {
                return <Chip key={e.key} name={e.name} link={e.link} />;
              })}
            </div>
          </div>

          <div className={style.rightArrow} ref={arrRRef}>
            <div className={style.buttonWrapper}>
              <button
                className={buttonClassR}
                onMouseDown={() => {
                  buttonInitHandle("right");
                }}
                onClick={() => {
                  onClickHandler("right");
                }}
              >
                <svg
                  viewBox="0 0 16 16"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <g mirror-in-rtl="">
                    <path d="M4.97,12.65L9.62,8L4.97,3.35l0.71-0.71L11.03,8l-5.35,5.35L4.97,12.65z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Tagbar;
