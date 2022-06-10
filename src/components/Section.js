import React from "react";
import Card from "./Card";
import classes from "./Section.module.css";
import data from "./data";

function Section() {
  return (
    <section className={classes.section}>
      <Card data={data} />
    </section>
  );
}

export default Section;
