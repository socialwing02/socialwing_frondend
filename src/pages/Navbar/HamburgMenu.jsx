import React from "react";
import classes from "../../styles/css/home.module.css";
import { navLinks } from "../../data";
import { Link, useNavigate } from "react-router-dom";
import { delay, motion } from "framer-motion";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function HamburgMenu({ onOpen }) {
  const navigate = useNavigate();

  function handleClose() {
    onOpen(false);
  }

  function handleLinkClick(path) {
    console.log(path);

    navigate(path);
    onOpen(false);
  }

  return (
    <motion.section
      className={classes.hamburgContainer}
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className={classes.hamburgTitle}>
        <h3>Menus</h3>
        <span onClick={handleClose}>
          <CloseOutlinedIcon fontSize="large" />
        </span>
      </div>

      <motion.div
        className={classes.hamburgLinksContainer}
        variants={containerVars}
        initial="initial"
        animate="animate"
      >
        {navLinks.map((link, index) => (
          <motion.li
            key={index}
            className={classes.hamburgLinks}
            variants={navVars}
            onClick={() => handleLinkClick(link.path)}
          >
            <Link>{link.name}</Link>
          </motion.li>
        ))}
      </motion.div>
    </motion.section>
  );
}

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: { duration: 0.5, ease: [0, 0.19, 0.48, 1] },
  },
  exit: {
    scaleY: 0,
    transition: { duration: 0.4, ease: [0, 1, 0.35, 1] },
  },
};

const navVars = {
  initial: {
    y: "30vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

const containerVars = {
  initial: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
      staggerDirection: 1,
    },
  },
};
