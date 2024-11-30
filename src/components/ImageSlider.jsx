import React from "react";
import classes from "../styles/css/home.module.css";
import { IMAGES } from "../data";

export default function ImageSlider({ animateClassName }) {
  const className = classes[animateClassName];

  return (
    <section className={className}>
      <div className={classes.marquee}>
        <ul className={classes.marqueeContent}>
          {IMAGES.map((image) => (
            <div key={image} className={classes.marqueeItem}>
              <img src={image} alt={image} loading="lazy" />
            </div>
          ))}
        </ul>

        <ul className={classes.marqueeContent}>
          {IMAGES.map((image) => (
            <div key={image} className={classes.marqueeItem}>
              <img src={image} alt={image} loading="lazy" />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
