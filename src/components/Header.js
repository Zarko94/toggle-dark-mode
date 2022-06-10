import React from "react";
import classes from "./Header.module.css";
import logo from "../assets/Fill 213.png";
// console.log(logo);

function Header() {
  return (
    <div className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>my travel journal.</h1>
    </div>
  );
}

export default Header;
