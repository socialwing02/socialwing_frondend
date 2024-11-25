import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "../styles/css/home.module.css";

export default function TransitionProvider({ children }) {
  const location = useLocation();

  const pathName = location.pathname;

  let path = pathName;

  if (pathName === "/") {
    path = "";
  } else {
    path = pathName.substring(1);
  }

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <motion.div
          initial={{ height: "140vh" }}
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className={classes.navFirstScreen}
        />

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: pathName === "/" ? 2 : 0.5 }}
          className={classes.navTextScreen}
        >
          {pathName === "/" && (
            <motion.img
              src="logo.png"
              className={classes.homeImg}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, scale: [1.5, 1] }}
              exit={{ opacity: 0, position: "relative" }}
              transition={{
                ease: "easeOut",
                duration: pathName === "/" ? 1 : 0.5,
              }}
            />
          )}
          {path}
        </motion.div>

        <motion.div
          initial={{ height: "140vh" }}
          animate={{
            height: "0vh",
            transition: { delay: pathName === "/" ? 1 : 0.5 },
          }}
          className={classes.navSecondScreen}
        />
      </div>

      {children}
    </AnimatePresence>
  );
}
