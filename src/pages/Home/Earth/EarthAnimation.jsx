import React, { lazy, Suspense } from "react";
import classes from "../../../styles/css/home.module.css";
import EarthText from "./EarthText";
const Earth = lazy(() => import("./Earth"));
import placeholderEarth from "../../../assets/earth/placeholder.png";

export default function EarthAnimation() {
  return (
    <section className={classes.earthContainer}>
      <Suspense fallback={<img src={placeholderEarth} />}>
        <Earth />
        <EarthText />
      </Suspense>
    </section>
  );
}
