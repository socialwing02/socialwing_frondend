import React, { useEffect, useState } from "react";
import classes from "../styles/css/home.module.css";
import Image from "./Image.jsx";
import { IMAGES } from "../data/index.js";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import useMeasure from "react-use-measure";

export default function ImageSlider({ reverse = false }) {
  const [isHover, setIsHovered] = useState(false);

  const repeated = [...IMAGES, ...IMAGES];

  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    if (width === 0) return;

    const loopDistance = width / 2;
    const SLOW_DURATION = 75;

    const FAST_DURATION = 10;

    const position = reverse ? [-loopDistance, 0] : [0, -loopDistance];

    const controls = animate(xTranslation, position, {
      ease: "linear",
      duration: isHover ? SLOW_DURATION : FAST_DURATION,
      repeat: Infinity,
    });

    return () => controls.stop();
  }, [width, xTranslation, reverse]);

  return (
    <div className={classes.imageSlider}>
      <motion.div
        className={classes.slideImgContainer}
        ref={ref}
        style={{
          x: xTranslation,
        }}
        onMouseMove={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {repeated.map((image, index) => (
          <Image img={image} key={index} />
        ))}
      </motion.div>
    </div>
  );
}
