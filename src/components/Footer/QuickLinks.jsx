import React from "react";
import { navLinks } from "../../data";
import { Link } from "react-router-dom";

export default function QuickLinks() {
  return (
    <div className="footerLinks">
      <h2>Links</h2>
      {/* <div style={{ display: "flex" }}> */}
      {navLinks.map((link) => (
        <li key={link.path}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
      {/* </div> */}
    </div>
  );
}
