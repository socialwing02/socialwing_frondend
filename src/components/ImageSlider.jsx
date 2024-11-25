import React, { useState, useEffect } from "react";
import classes from "../styles/css/home.module.css";
import Image from "./Image.jsx";
import { IMAGES } from "../data/index.js";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalImages = IMAGES.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handlePrev();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  const imagesToDisplay = [
    ...IMAGES.slice(currentIndex, currentIndex + itemsPerPage),
    ...IMAGES.slice(0, Math.max(0, currentIndex + itemsPerPage - totalImages)),
  ];

  return (
    <div className={classes.slideWrapper}>
      <div className={classes.slideViewport}>
        <div className={classes.slideImgContainer}>
          <span onClick={handleNext} className={classes.leftArrow}>
            <ArrowBackIosNewSharpIcon />
          </span>
          {imagesToDisplay.map((image, index) => (
            <Image img={image} key={index} />
          ))}
          <span onClick={handlePrev} className={classes.rightArrow}>
            <ArrowForwardIosSharpIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
