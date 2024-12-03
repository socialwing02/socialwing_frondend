import React from "react";
import classes from "../../styles/css/home.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variant";
import Form from "../../components/Form";

export default function HomeContact() {
  return (
    <>
      <img
        src="img/let-connect1.PNG"
        alt=""
        className={classes.homeContactImg}
      />
      <section style={{ backgroundColor: "#000" }}>
        <div className={classes.homeContact}>
          <motion.div
            className={classes.homeFormSection}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
          >
            <Form styleBlack={true} />
          </motion.div>
        </div>
      </section>
    </>
  );
}
