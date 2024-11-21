import React from "react";
import Counter from "../../motion/Counter";
import classes from "../../styles/css/home.module.css";

export default function CounterWrapper() {
  return (
    <div className={classes.counterWrapper}>
      <div className={classes.counter}>
        <span>
          <Counter value={4} />
        </span>
        <span>Web Development</span>
      </div>
      <div className={classes.counter}>
        <span>
          <Counter value={20} />+
        </span>
        <span>Digital Marketing</span>
      </div>
      <div className={classes.counter}>
        <span>
          <Counter value={35} />+
        </span>
        <span>Logos & Designs</span>
      </div>
      <div className={classes.counter}>
        <span>
          <Counter value={10} />+
        </span>
        <span>SEO</span>
      </div>
    </div>
  );
}
