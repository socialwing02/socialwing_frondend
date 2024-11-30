import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";
import classes from "../styles/css/home.module.css";

export default function TransitionProvider({ children }) {
  const location = useLocation();

  const path = location.pathname === "/" ? "" : location.pathname.substring(1);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.key}>
        {/* First screen transition */}
        <motion.div
          initial={{ height: "140vh" }}
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className={classes.navFirstScreen}
        />

        {/* Text and logo animation */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0, display: "none" }}
          transition={{
            ease: "easeOut",
            duration: location.pathname === "/" ? 2 : 0.5,
          }}
          className={classes.navTextScreen}
        >
          {location.pathname === "/" && (
            <motion.img
              src="logo.png"
              className={classes.homeImg}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, scale: [1.5, 1] }}
              exit={{ opacity: 0, position: "relative" }}
              transition={{
                ease: "easeOut",
                duration: 1,
              }}
            />
          )}
          {path}
        </motion.div>

        {/* Second screen transition */}
        <motion.div
          initial={{ height: "140vh" }}
          animate={{
            height: "0vh",
            transition: { delay: location.pathname === "/" ? 1 : 0.5 },
          }}
          className={classes.navSecondScreen}
        />
      </motion.div>

      {/* Render children with animation */}
      {children}
    </AnimatePresence>
  );
}
