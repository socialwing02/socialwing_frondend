import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";

const HomeHero = lazy(() => import("../Home/HomeHero"));
const EarthAnimation = lazy(() => import("../Home/Earth/EarthAnimation"));
const TextAnimation = lazy(() => import("../Home/TextAnimation"));
const HomeService = lazy(() => import("../../components/HomeService"));
const ImageSlider = lazy(() => import("../../components/ImageSlider"));
const HomeContact = lazy(() => import("../Home/HomeContact"));

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}
