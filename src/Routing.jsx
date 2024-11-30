import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
const Home = lazy(() => import("./pages/Screen/Home"));
const Services = lazy(() => import("./pages/Screen/Services"));
const About = lazy(() => import("./pages/Screen/About"));
const Blog = lazy(() => import("./pages/Screen/Blog"));
const ContactUs = lazy(() => import("./pages/Screen/ContactUs"));

export default function Routing() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
