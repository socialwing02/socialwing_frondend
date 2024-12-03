import React from "react";
import classes from "../../styles/css/contact.module.css";
import Form from "../../components/Form";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variant";

export default function ContactUs() {
  return (
    <>
      <motion.section
        className={classes.contactSection}
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className={classes.wrapper}>
          <motion.div
            className={classes.content}
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView="show"
          >
            <h2>Let&apos;s Connect</h2>
            <p>
              At Social Wing Digital Marketing Agency, we believe that strong
              communication is key to building successful partnerships. Whether
              you have questions, want to explore our services, or need support,
              our team is always here to assist you
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView="show"
          >
            <Form />
          </motion.div>
        </div>
      </motion.section>
      <div className={classes.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.96561115059!2d77.32372157449184!3d8.206212701326374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f970b1f3edb3%3A0x1144015129422458!2sState%20Bank%20of%20India%20KANDANVILAI!5e0!3m2!1sen!2sin!4v1732351966282!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
