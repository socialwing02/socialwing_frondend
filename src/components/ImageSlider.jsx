import React, { useState } from "react";
import classes from "../styles/css/home.module.css";
import CardSlider from "../components/CardSlider.jsx";
import { IMAGES } from "../data/index.js";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of images visible at a time
  const totalImages = IMAGES.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < totalImages ? prevIndex + itemsPerPage : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage >= 0
        ? prevIndex - itemsPerPage
        : totalImages - itemsPerPage
    );
  };

  return (
    <div className={classes.slideWrapper}>
      {/* Left Arrow */}
      <span
        className={classes.sliderArrow}
        style={{ marginLeft: "2rem", cursor: "pointer" }}
        onClick={handlePrev}
      >
        <ArrowBackIosNewSharpIcon />
      </span>

      {/* Image Container */}
      <div className={classes.slideViewport}>
        <div className={classes.slideImgContainer}>
          {IMAGES.slice(currentIndex, currentIndex + itemsPerPage).map(
            (image, index) => (
              <CardSlider img={image} key={index} />
            )
          )}
        </div>
      </div>

      {/* Right Arrow */}
      <span
        className={classes.sliderArrow}
        style={{ marginRight: "2rem", cursor: "pointer" }}
        onClick={handleNext}
      >
        <ArrowForwardIosSharpIcon />
      </span>
    </div>
  );
}
