import React, { useEffect } from "react";
import classes from "../styles/css/home.module.css";
import { animate, useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import CardSlider from "../components/CardSlider.jsx";

export default function ImageSlider() {
  const images = [
    "img/banner.png",
    "img/capabilities.png",
    "img/banner.png",
    "img/capabilities.png",
    "img/banner.png",
    "img/capabilities.png",
    "img/banner.png",
    "img/capabilities.png",
  ];

  const repeated = [...images, ...images];

  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 16;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return () => controls.stop;
  }, [xTranslation, width]);
  return (
    <div className={classes.slideWrapper}>
      <motion.div
        className={classes.slideImgContainer}
        ref={ref}
        style={{ x: xTranslation }}
      >
        {repeated.map((image, index) => (
          <CardSlider img={image} key={index} />
        ))}
      </motion.div>
    </div>
  );
}
