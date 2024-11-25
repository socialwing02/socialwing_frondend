import React from "react";
import Counter from "../../motion/Counter";
import classes from "../../styles/css/home.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variant";

export default function CounterWrapper() {
  return (
    <motion.div
      className={classes.counterWrapper}
      variants={fadeIn("down", 0.5)}
      whileInView="show"
      initial="hidden"
    >
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
    </motion.div>
  );
}
