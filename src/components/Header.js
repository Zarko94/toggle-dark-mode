import React from "react";
import troll from "../assets/Troll Face.png";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img src={troll} alt="troll" className={classes["header--image"]} />
      <h2 className={classes["header--title"]}>Meme Generator</h2>
      <h4 className={classes["header--project"]}>React Course - Project 3</h4>
    </header>
  );
}

export default Header;
