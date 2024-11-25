import React from "react";
import classes from "../styles/css/home.module.css";
import { motion } from "framer-motion";

export default function Card({ img, alt, phoneNumber, title }) {
  const whatsappLink = `https://wa.me/9789647901`;

  function handleClick() {
    window.location.href = whatsappLink;
  }

  return (
    <motion.div
      className={classes.card}
      variants={{
        initial: { opacity: 0, y: 40, scale: 0.8 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
          },
        },
      }}
    >
      <img src={img} alt={alt} />
      <div className={classes.cardContents}>
        <h2>{title}</h2>
        {/* <p>Some content</p> */}
        <span onClick={handleClick}>View More</span>
      </div>
    </motion.div>
  );
}
