import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Screen/Home";
import Services from "./pages/Screen/Services";
import About from "./pages/Screen/About";
import Blog from "./pages/Screen/Blog";
import ContactUs from "./pages/Screen/ContactUs";
import Layout from "./pages/Layout";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}
