import React from "react";
import classes from "../../styles/css/about.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variant";

export default function About() {
  return (
    <motion.div
      className={classes.about}
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <section className={classes.aboutUsSection}>
        <motion.div
          className={classes.aboutUsContent}
          variants={fadeIn("right", 0.7)}
          initial="hidden"
          whileInView="show"
        >
          <h2>About Us</h2>
          <p>
            Welcome to Social Wing, your trusted partner in digital marketing,
            SEO, web design, and graphic design solutions. At Social Wing, we
            empower businesses to thrive in the digital world by creating
            tailored marketing strategies that drive growth, improve online
            visibility, and enhance user engagement.
          </p>
        </motion.div>
        <motion.img
          src="img/banner.png"
          alt=""
          variants={fadeIn("left", 0.7)}
          initial="hidden"
          whileInView="show"
        />
      </section>

      <section className={classes.cardContainer}>
        <div className={classes.card}>
          <h4>Our Mission</h4>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            voluptatem accusamus neque modi aperiam, recusandae dolorum eum
            totam voluptate ut, molestiae similique sint illo fuga quia enim
            animi labore voluptatum.
          </p>
        </div>
        <div className={classes.card}>
          <h4>Our Vission</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            voluptatem accusamus neque modi aperiam, recusandae dolorum eum
            totam voluptate ut, molestiae similique sint illo fuga quia enim
            animi labore voluptatum.
          </p>
        </div>
      </section>

      <section className={classes.whyContainer}>
        <motion.img
          src="img/banner.png"
          alt=""
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
        />

        <motion.div
          className={classes.whyContent}
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
        >
          <h3>Why Social Wing ?</h3>

          <p>
            At Social Wing, we prioritize understanding your business goals and
            audience. By combining creativity with strategic insights, we
            deliver results that make an impact. Our commitment to quality,
            transparency, and customer satisfaction ensures that we are the
            go-to digital partner for businesses of all sizes. <br />
            <br /> Let us help you take your brand to new heights. Whether you
            need to boost your search rankings, create a visually compelling
            website, or design graphics that resonate with your audience, Social
            Wing is here to turn your vision into reality.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
}
