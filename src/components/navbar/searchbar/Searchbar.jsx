import { React, useRef, useState, Fragment } from "react";
import style from "./Searchbar.module.scss";
import ButtonHover from "../../buttonhover/ButtonHover";
const Searchbar = () => {
  const focusRef = useRef();
  const [iconClass, setIconClass] = useState(style.searchIcon);
  const [inputClass, setInputClass] = useState("");

  //React does not rerender things outside of return
  const onBlurHandler = () => {
    setIconClass(style.searchIcon);
    setInputClass("");
  };
  const onFocusHandler = () => {
    setIconClass(`${style.searchIcon} ${style.active}`);
    setInputClass(style.active);
  };

  return (
    <Fragment>
      <div className={style.container}>
        <div className={style.wrapper}>
          <form action="">
            <div className={style.iconWrapper}>
              <div
                className={iconClass} //change dynamically
              >
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <g>
                    <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <input
              type="text"
              placeholder="Rechercher"
              className={inputClass} //need to change this dynamically with focus on input
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              ref={focusRef}
            />
          </form>
          <div className={style.buttonWrapper}>
            <ButtonHover className={style.buttonIcon} text="Rechercher">
              <div className={style.searchIcon}>
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <g>
                    <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
                  </g>
                </svg>
              </div>
            </ButtonHover>
          </div>
          <div className={style.buttonWrapper}>
            <ButtonHover
              className={style.voiceButton}
              text="Effectuer une recherche vocale"
            >
              <div className={style.voiceIcon}>
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <g>
                    <path d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"></path>
                  </g>
                </svg>
              </div>
            </ButtonHover>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Searchbar;
