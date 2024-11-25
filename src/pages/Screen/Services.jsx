import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import classes from "../../styles/css/service.module.css";
import { IMAGES, portfolioData } from "../../data";

export default function Services() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0deg", "180deg", "360deg"]
  );

  // Define the x movement for images from right to left
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
          <div className={classes.allIcons}>
            <motion.div className={classes.animateIcons1}>
              <motion.img
                src="img/icons/fac-icon.PNG"
                alt="React"
                style={{ rotate, x, width: "100px", height: "100px" }}
              />
              <motion.img
                src="img/icons/insta-icon.PNG"
                alt="React"
                style={{ rotate, x, width: "100px", height: "100px" }}
              />
              <motion.img
                src="img/icons/x-icon.PNG"
                alt="React"
                style={{ rotate, x, width: "100px", height: "100px" }}
              />
              <motion.img
                src="img/icons/x-icon.PNG"
                alt="React"
                style={{ rotate, x, width: "100px", height: "100px" }}
              />
            </motion.div>

            <motion.div className={classes.animateIcons2}>
              <motion.img
                src="img/icons/fac-icon.PNG"
                alt="React"
                style={{ rotate, x, width: "100px", height: "100px" }}
              />
              <motion.img
                src="img/icons/insta-icon.PNG"
                alt="React"
                style={{ rotate, x, width: "100px", height: "100px" }}
              />
              <motion.img
                src="img/icons/x-icon.PNG"
                alt="React"
                style={{ rotate, x, width: "100px", height: "100px" }}
              />
              <motion.img
                src="img/icons/x-icon.PNG"
                alt="React"
                style={{ rotate, x, width: "100px", height: "100px" }}
              />
            </motion.div>

            <motion.div className={classes.animateIcons3}>
              <motion.img
                src="img/icons/fac-icon.PNG"
                alt="React"
                style={{ rotate, x, width: "100px", height: "100px" }}
              />
              <motion.img
                src="img/icons/insta-icon.PNG"
                alt="React"
                style={{ rotate, x, width: "100px", height: "100px" }}
              />
              <motion.img
                src="img/icons/x-icon.PNG"
                alt="React"
                style={{ rotate, x, width: "100px", height: "100px" }}
              />
              <motion.img
                src="img/icons/x-icon.PNG"
                alt="React"
                style={{ rotate, x, width: "100px", height: "100px" }}
              />
            </motion.div>
          </div>
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

  return (
    <div
      className={classes.sectionContainer}
      style={{ flexDirection: reverse ? "row" : "row-reverse" }}
      ref={ref}
    >
      <div className={classes.content}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>

      <div className={classes.serviceSectionImage}>
        <motion.img src={img} alt={title} style={{ y: y }} />
      </div>
    </div>
  );
}
