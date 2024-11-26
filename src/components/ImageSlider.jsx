import React, { useState, useEffect } from "react";
import classes from "../styles/css/home.module.css";
import Image from "./Image.jsx";
import { IMAGES } from "../data/index.js";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

export default function ImageSlider() {
  const repeated = [...IMAGES, ...IMAGES];

  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 16;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return () => controls.stop;
  }, [xTranslation, width]);

  return (
    <motion.div
      className={classes.slideImgContainer}
      ref={ref}
      style={{ x: xTranslation }}
    >
      {repeated.map((image, index) => (
        <Image img={image} key={index} />
      ))}
    </motion.div>
  );
}
