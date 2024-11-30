import React from "react";
import classes from "../../styles/css/home.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variant";
import Form from "../../components/Form";

export default function HomeContact() {
  return (
    <section style={{ backgroundColor: "#000" }}>
      <div className={classes.homeContact}>
        <motion.div
          className={classes.homeContent}
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <h3>title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eos similique et possimus eveniet nisi odio nam, placeat impedit a,
            molestiae corrupti omnis vitae sint deserunt blanditiis! Possimus,
            inventore cum.
          </p>
        </motion.div>
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
  );
}
