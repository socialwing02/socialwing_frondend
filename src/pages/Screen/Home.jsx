import React, { lazy, Suspense } from "react";
import ImageSlider from "../../components/ImageSlider";
import { motion } from "framer-motion";
import HomeService from "../../components/HomeService";
import TextAnimation from "../Home/TextAnimation";
import HomeContact from "../Home/HomeContact";
import HomeHero from "../Home/HomeHero";
import EarthAnimation from "../Home/Earth/EarthAnimation";

export default function Home() {
  return (
    <motion.main
      style={{ backgroundColor: "#000" }}
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <HomeHero />
      <EarthAnimation />
      <TextAnimation />
      <HomeService />
      <ImageSlider animateClassName="enableAnimation" />
      <ImageSlider animateClassName="enableAnimationReverse" />
      <HomeContact />
    </motion.main>
  );
}
