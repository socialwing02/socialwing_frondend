import React from "react";
import Navbar from "./Home/Navbar";
import { Outlet } from "react-router-dom";
import NavSlider from "./Navbar/NavSlider";

export default function Layout() {
  return (
    <>
      <NavSlider />
      <Navbar />
      <Outlet />
    </>
  );
}
