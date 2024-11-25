import React, { useRef } from "react";
import classes from "../../styles/css/home.module.css";
import CounterWrapper from "./CounterWrapper";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { fadeIn } from "../../utils/variant";
import heroImage from "/img/hero-image.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";
export default function DigitalMarketing() {
  const ref = useRef();

  const { scrollY } = useScroll({
    target: ref,
    offset: ["end end", "end end"],
  });

  const opacity = useTransform(scrollY, [0, 100, 200, 300], [1, 0.5, 0.5, 0]);
  const opacityText = useTransform(
    scrollY,
    [0, 450, 500, 600],
    [1, 0.5, 0.5, 0]
  );
  const y = useTransform(scrollY, [0, 200, 400], [0, -100, -200]);
  const textScale = useTransform(
    scrollY,
    [0, 200, 300, 400],
    [1, 1.1, 1.2, 1.4]
  );
  const textY = useTransform(scrollY, [0, 200, 400], [0, 100, 200]);
  const textX = useTransform(scrollY, [0, 200, 400], [0, 100, 200]);

  return (
    <div className={classes.heroVideo}>
      {/* <Navbar /> */}
      <video
        src="video/hero-video3.MP4"
        loop
        autoPlay
        className={classes.hero}
      />
      <div className={classes.navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="services">Services</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
        </ul>
      </div>
      {/* <video
        src="video/logo-video2.mp4"
        loop
        autoPlay
        className={classes.logo}
      /> */}
    </div>

    // <AnimatePresence>
    //   <motion.section className={classes.digitalWrapper}>
    //     <div className={classes.digitalContainer}>
    //       <motion.div
    //         className={classes.digitalContent}
    //         variants={fadeIn("right", 0.5)}
    //         initial="hidden"
    //         whileInView="show"
    //         exit="hidden"
    //         // style={{
    //         //   scale: textScale,
    //         //   y: textY,
    //         //   x: textX,
    //         //   opacity: opacityText,
    //         // }}
    //       >
    //         <h2>
    //           Unlock Your Brand's Potential
    //           <br /> with Expert
    //           <br /> Digital Marketing Services
    //         </h2>
    //         <h5>
    //           <br />
    //         </h5>
    //       </motion.div>
    //       <motion.div
    //         className={classes.digitalHeroImage}
    //         variants={fadeIn("left", 0.3)}
    //         initial="hidden"
    //         whileInView="show"
    //         exit="show"
    //         ref={ref}
    //         style={{ y, opacity }}
    //       >
    //         {/* <img src={heroImage} className={classes.imgGif} /> */}
    //       </motion.div>
    //     </div>
    //     {/* <CounterWrapper /> */}
    //   </motion.section>
    // </AnimatePresence>
  );
}
