import React, { lazy, Suspense } from "react";
import classes from "../../../styles/css/home.module.css";
import EarthText from "./EarthText";
const Earth = lazy(() => import("./Earth"));

export default function EarthAnimation() {
  return (
    <section className={classes.earthContainer}>
      <Suspense fallback={<img src="earth/placeholder.png" />}>
        <Earth />
        <EarthText />
      </Suspense>
    </section>
  );
}
