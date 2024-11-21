import React from "react";
import classes from "../../styles/css/navbar.module.css";

export default function NavSlider() {
  return (
    <div className={classes.navbar}>
      <div className={classes.slide}>
        <span>Social Wing</span>
        <span>Digital Marketing</span>
        <span>Graphic Designing</span>
        <span>Web Development</span>
      </div>
      <div className={classes.slide}>
        <span>Social Wing</span>
        <span>Digital Marketing</span>
        <span>Graphic Designing</span>
        <span>Web Development</span>
      </div>
      <div className={classes.slide}>
        <span>Social Wing</span>
        <span>Digital Marketing</span>
        <span>Graphic Designing</span>
        <span>Web Development</span>
      </div>
    </div>
  );
}
