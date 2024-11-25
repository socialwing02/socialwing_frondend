import React from "react";
import Card from "../../components/Card";
import card1 from "../../../public/img/banner.png";
import classes from "../../styles/css/home.module.css";
import { motion } from "framer-motion";

export default function Cards() {
  const number = 8015544800;

  return (
    <div className={classes.cards}>
      <h2>Our Services</h2>
      <motion.div
        className={classes.cardWrapper}
        variants={{
          initial: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
              ease: "easeOut",
            },
          },
        }}
        initial="initial"
        whileInView="show"
      >
        <Card img={card1} phoneNumber={number} />
        <Card img={card1} phoneNumber={number} />
        <Card img={card1} phoneNumber={number} />
      </motion.div>
    </div>
  );
}
