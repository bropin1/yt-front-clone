import { React, useEffect, useState, useRef } from "react";
import style from "./Home.module.scss";
import Navbar from "../../components/navbar/Navbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar";
import Tagbar from "../../components/tagbar/Tagbar";
import VideoGrid from "../../components/videogrid/VideoGrid.jsx";

const Home = () => {
  const myWidthRef = useRef();
  const [width, setWidth] = useState(0);
  const resizeHandle = () => {
    setWidth(myWidthRef.current.getBoundingClientRect().width);
  };

  useEffect(() => {
    resizeHandle();
    window.addEventListener("resize", resizeHandle);
  }, []);

  return (
    <div className={style.home}>
      <header>
        <Navbar />
      </header>

      <div className={style.sidebar}>
        <div className={style.fixed}>
          <Sidebar />
        </div>
      </div>

      <div className={style.mainBody} ref={myWidthRef}>
        <div className={style.tagbar} style={{ width: `${width + "px"}` }}>
          <Tagbar mainBodyRef={myWidthRef} />
        </div>
        <section className={style.videoContainer}>
          <VideoGrid />
        </section>
      </div>
    </div>
  );
};

export default Home;
