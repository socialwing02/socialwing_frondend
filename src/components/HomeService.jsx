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
import { fadeIn } from "../utils/variant";

export default function HomeService() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start end"],
  });

  const scaleX = useSpring(scrollYProgress);

  const { x, y } = useMousePosition();

  const isInView = useInView(ref);

  return (
    <div className={classes.portfolio} ref={ref}>
      {portfolioData.map((item) => (
        <Section key={item.id} item={item} />
      ))}
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

  const isInView = useInView(contentRef, { margin: "-100px 0px -100px 0px" });
  const isImageInView = useInView(imgRef, { margin: "200px 0px 200px 0px" });

  const fade = item.reverse ? "left" : "right";

  return (
    <motion.section
      className={`${classes.portfolioSection} ${
        item.reverse ? classes.RowreversePortfolio : classes.row
      }`}
    >
      <motion.div
        ref={contentRef}
        variants={fadeIn(fade, 0.2)}
        initial="hidden"
        whileInView="show"
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
