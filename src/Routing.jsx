import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import AdminProtected from "./components/AdminProtected";
import BlogUpload from "./components/BlogUpload";
import ProtectedRoute from "./components/ProtectedRoute";
import NotAdmin from "./components/NotAdmin";
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
          <Route path="contact" element={<ContactUs />} />
        </Route>
        <Route path="/admin" element={<AdminProtected />} />
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <BlogUpload />
            </ProtectedRoute>
          }
        />
        <Route path="/notadmin" element={<NotAdmin />} />
      </Routes>
    </Suspense>
  );
}
