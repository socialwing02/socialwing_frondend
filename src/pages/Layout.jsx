import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavSlider from "./Navbar/NavSlider";
import Footer from "../components/Footer/Footer";
import Navbar from "./Home/Navbar";
import TransitionProvider from "../context/TransitionProvider";

export default function Layout() {
  const location = useLocation();
  return (
    <>
      <TransitionProvider>
        {location.pathname !== "/" && <Navbar />}
        <Outlet />
        <Footer />
      </TransitionProvider>
    </>
  );
}
