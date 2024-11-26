import React, { useRef } from "react";
import { portfolioData } from "../data";
import classes from "../styles/css/home.module.css";
import {
  useScroll,
  useSpring,
  motion,
  useTransform,
  useInView,
} from "framer-motion";
import Card from "./Card";
import useMousePosition from "../hooks/useMousePosition";
import ImageSlider from "./ImageSlider";

export default function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start end"],
  });

  const scaleX = useSpring(scrollYProgress);

  const { x, y } = useMousePosition();

  const isInView = useInView(ref);

  console.log(isInView);

  return (
    <div className={classes.portfolio} ref={ref}>
      <motion.div className={classes.cursor}>
        <div className={classes.portfolioHeader}>
          <h2>Services</h2>
          <motion.div
            className={classes.progressBar}
            style={{ scaleX }}
          ></motion.div>
        </div>

        {portfolioData.map((item) => (
          <Section key={item.id} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

function Section({ item }) {
  const ref = useRef();
  const contentRef = useRef();
  const imgRef = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  const isInView = useInView(contentRef, { margin: "0px 0px 0px 0px" });
  const isImageInView = useInView(imgRef, { margin: "200px 0px 200px 0px" });

  return (
    <motion.section className={classes.portfolioSection}>
      <motion.div
        ref={contentRef}
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={classes.portfolioContent}
      >
        <h2>{item.title}</h2>
        <p ref={imgRef}>{item.desc}</p>
      </motion.div>

      {/* <motion.div
        style={{
          opacity: isImageInView ? 1 : 0,
          scale: isImageInView ? 1 : 0.8,
          transition: "opacity 0.5s, transform 0.5s",
        }}
      >
      </motion.div> */}

      <motion.div
        ref={ref}
        style={{
          opacity: isImageInView ? 1 : 0,
          scale: isImageInView ? 1 : 0.8,
          transition: "opacity 0.5s, transform 0.5s",
        }}
      >
        <Card img={item.img} alt={item.title} title={item.title} />
      </motion.div>
    </motion.section>
  );
}
