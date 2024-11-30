import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import classes from "../../styles/css/service.module.css";
import { IMAGES, portfolioData } from "../../data";
import { fadeIn } from "../../utils/variant";

export default function Services() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className={classes.serviceContainer}>
        <h2>Our Services</h2>
      </div>
      <div className={classes.section}>
        {portfolioData.map((item) => (
          <Section item={item} />
        ))}

        <motion.div
          className={classes.serviceAnimate}
          ref={ref}
          style={{ opacity }}
        >
          <motion.div className={classes.animateIcons}>
            <motion.img
              src="react.webp"
              alt="React"
              style={{ rotate, x }}
              transition={{ duration: 3 }}
            />
            <motion.img
              src="img/python.png"
              alt="python"
              style={{ rotate, x }}
              transition={{ duration: 3 }}
              className={classes.python}
            />
          </motion.div>
          <img
            src="boy.webp"
            alt="Boy"
            className={classes.boy}
            style={{ marginTop: "-5rem" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Section({ item }) {
  const { title, desc, img, reverse } = item;

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const fade = item.reverse ? "left" : "right";

  return (
    <div
      className={`${classes.sectionContainer} ${
        item.reverse ? classes.reverse : classes.row
      }`}
      ref={ref}
    >
      <motion.div
        className={classes.content}
        variants={fadeIn(fade, 0.3)}
        initial="hidden"
        whileInView="show"
      >
        <h1>{title}</h1>
        <p>{desc}</p>
      </motion.div>

      <div className={classes.serviceSectionImage}>
        <motion.img src={img} alt={title} style={{ y: y }} />
      </div>
    </div>
  );
}
