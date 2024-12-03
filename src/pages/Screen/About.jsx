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
            Welcome to Social Wing Digital Marketing Agency, where creativity
            meets strategy to deliver outstanding digital solutions. Founded
            with a passion for helping businesses thrive in the digital age, we
            are a team of dedicated experts committed to transforming your
            online presence into a powerful growth engine
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
            At Social Wing Digital Marketing Agency, our mission is to provide
            effective, results-oriented digital marketing solutions that help
            businesses achieve their objectives and enhance their brands. We
            focus on creating tailored strategies that captivate audiences,
            increase traffic, and boost conversions.
          </p>
        </div>
        <div className={classes.card}>
          <h4>Our Vission</h4>
          <p>
            To be the best digital marketing agency in Tamil Nadu, helping
            businesses grow online. We create smart, effective solutions that
            connect brands with their audience. By using creativity and data, we
            help businesses succeed and reach their goals. Our aim is to support
            long-term growth for every brand we work with
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
            At Social Wing, we don’t just provide services—we build
            partnerships. Our team takes the time to understand your goals and
            challenges, tailoring solutions that align with your vision. Whether
            you need to enhance brand awareness, generate leads, or boost sales,
            we have the expertise and tools to make it happen. Transparency,
            collaboration, and measurable outcomes are the cornerstones of our
            approach <br />
            <br />
            Our approach is built on three key principles: transparency,
            collaboration, and measurable outcomes. From the moment we start
            working together, you’ll experience a level of openness and
            communication that keeps you informed every step of the way. We
            believe in the power of collaboration—working closely with your team
            to ensure alignment and drive impactful strategies. And, most
            importantly, we focus on delivering measurable outcomes, so you can
            track and celebrate the success of our efforts
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
}
