import React from "react";
import Titles from "./Titles";
import { EarthData } from "../../../data";
import classes from "../../../styles/css/home.module.css";

export default function EarthText() {
  return (
    <div className={classes.earthTextContainer}>
      <Titles data={EarthData} />
    </div>
  );
}
