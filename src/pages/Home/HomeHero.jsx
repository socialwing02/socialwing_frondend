import React, { useEffect, useRef, useState } from "react";
import classes from "../../styles/css/home.module.css";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { Link } from "react-router-dom";
import StarsCanvas from "./Stars";
import { navLinks } from "../../data";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ChatbotContainer from "./Chatbot";
import MenuIcon from "@mui/icons-material/Menu";
import HamburgMenu from "../Navbar/HamburgMenu";
import { section } from "framer-motion/client";

export default function HomeHero() {
  const ref = useRef();

  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(true);
  }

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });

  // const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 0])
  // const opacityText = useTransform(
  //   scrollY,
  //   [0, 450, 500, 600],
  //   [1, 0.5, 0.5, 0]
  // );
  // const y = useTransform(scrollY, [0, 200, 400], [0, -100, -200]);
  // const textScale = useTransform(
  //   scrollY,
  //   [0, 200, 300, 400],
  //   [1, 1.1, 1.2, 1.4]
  // );
  // const textY = useTransform(scrollY, [0, 200, 400], [0, 100, 200]);
  // const textX = useTransform(scrollY, [0, 200, 400], [0, 100, 200]);

  return (
    <AnimatePresence>
      <motion.div className={classes.heroVideo}>
        <div className={classes.logo}>
          <img src="logo.png" />
        </div>
        <div className={classes.navbar}>
          <ul className={classes.navList}>
            {navLinks.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.2, type: "spring" }}
              >
                <Link to={item.path}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>
          <div className={classes.menuIcon} onClick={handleClick}>
            <MenuIcon sx={{ fontSize: "3rem" }} />
          </div>
        </div>
        <div className={classes.chatIcons}>
          <div className={classes.phone}>
            <LocalPhoneIcon sx={{ color: "blue", fontSize: "2.5rem" }} />
          </div>
          <div className={classes.whatsapp}>
            <WhatsAppIcon sx={{ color: "green", fontSize: "2.5rem" }} />
          </div>
        </div>

        {isOpen && <HamburgMenu onOpen={setIsOpen} />}

        <ChatbotContainer />
        <StarsCanvas />
      </motion.div>
    </AnimatePresence>
  );
}
