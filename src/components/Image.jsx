import React, { useState } from "react";
import classes from "../styles/css/home.module.css";
import { motion } from "framer-motion";

export default function Image({ img }) {
  const [overlay, setOverlay] = useState(false);

  return (
    <motion.div
      layout
      className={classes.sliderImg}
      onHoverStart={() => setOverlay(true)}
      onHoverEnd={() => {
        setOverlay(false);
      }}
    >
      {overlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={classes.overlayContainer}
        >
          <div className={classes.overlay} />
        </motion.div>
      )}
      <img src={img} alt={img} />
    </motion.div>
  );
}
