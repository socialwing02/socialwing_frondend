import React from "react";
import DigitalMarketing from "../Home/DigitalMarketing";
import Cards from "../Home/Cards";
import ImageSlider from "../../components/ImageSlider";
import Details from "../../components/Details/Details";
import { motion } from "framer-motion";
import Services from "./Services";
import Portfolio from "../../components/Portfolio";
// import Stars from "../Home/Stars";

export default function Home() {
  return (
    <motion.main
      style={{ height: "100%" }}
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* <Stars /> */}
      <DigitalMarketing />
      <Portfolio />
      {/* <Cards /> */}
      {/* <Services /> */}
      {/* <Details /> */}
      <ImageSlider reverse={false} />
      <ImageSlider reverse={false} />
    </motion.main>
  );
}
