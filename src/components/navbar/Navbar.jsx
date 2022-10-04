import React from "react";
import style from "./Navbar.module.scss";
import Searchbar from "./searchbar/Searchbar.jsx";
import Navbarright from "./navbarright/Navbarright";
import Navbarleft from "./navbarleft/Navbarleft";
const Navbar = () => {
  return (
    <div className={style.mstrHead}>
      <div className={style.container}>
        <Navbarleft />
        <Searchbar />
        <Navbarright />
      </div>
     
    </div>
  );
};

export default Navbar;
