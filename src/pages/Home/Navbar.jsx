import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "../../styles/css/navbar.module.css";
import logo from "../../../public/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import HamburgMenu from "../Navbar/HamburgMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

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
            <li>
              <NavLink
                end
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "underline", color: "#7461d6" }
                    : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="services"
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "underline", color: "#7461d6" }
                    : undefined
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "underline", color: "#7461d6" }
                    : undefined
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blog"
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "underline", color: "#7461d6" }
                    : undefined
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "underline", color: "#7461d6" }
                    : undefined
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={classes.menuIcon} onClick={handleClick}>
          <MenuIcon fontSize="large" />
        </div>
        {isOpen && <HamburgMenu onOpen={setIsOpen} />}
      </nav>
    </>
  );
}
