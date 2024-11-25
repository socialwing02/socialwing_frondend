import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "../../styles/css/navbar.module.css";
import logo from "../../../public/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import HamburgMenu from "../Navbar/HamburgMenu";
import { navLinks } from "../../data";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../utils/variant";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(true);
  }

  return (
    <>
      <nav className={classes.navContainer}>
        <div>
          <img src={logo} alt="" className={classes.logo} autoPlay loop />
        </div>

        <div className={classes.navList}>
          <motion.ul
            variants={{
              hidden: { opacity: 0, transition: { staggerChildren: 0.2 } },
              show: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            initial="hidden"
            whileInView="show"
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                transition={{ type: "spring" }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  show: { opacity: 1, scale: 1 },
                }}
              >
                <NavLink
                  end
                  to={link.path}
                  style={({ isActive }) =>
                    isActive
                      ? { textDecoration: "underline", color: "#7461d6" }
                      : undefined
                  }
                >
                  {link.name}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className={classes.menuIcon} onClick={handleClick}>
          <MenuIcon fontSize="large" />
        </div>
        <AnimatePresence>
          {isOpen && <HamburgMenu onOpen={setIsOpen} />}
        </AnimatePresence>
      </nav>
    </>
  );
}
