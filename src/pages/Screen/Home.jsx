import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { LOGO_IMAGES, POSTER_IMAGE } from "../../data/index";

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
        <TextAnimation />
        <EarthAnimation />
        <HomeService />
        <div style={{ minHeight: "100vh" }}>
          <ImageSlider
            animateClassName="enableAnimation"
            images={LOGO_IMAGES}
          />
          <ImageSlider
            animateClassName="enableAnimationReverse"
            images={POSTER_IMAGE}
          />
        </div>
        <HomeContact />
      </motion.main>
    </Suspense>
  );
}
