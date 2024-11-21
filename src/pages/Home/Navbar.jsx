import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "../../styles/css/navbar.module.css";
import logo from "../../../public/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import HamburgMenu from "../Navbar/HamburgMenu";
import { navLinks } from "../../data";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(true);
  }

  return (
    <>
      <nav className={classes.navContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="" className={classes.logo} />
        </div>

        <div className={classes.navList}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
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
              </li>
            ))}
          </ul>
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
