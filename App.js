import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import { css } from "styled-components/macro"; 

import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";
import ThankYouPage from "ThankYouPage.js";
import RestaurantLandingPage from "./demos/RestaurantLandingPage";
import ContactUs from "./pages/ContactUs"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import Signup from "pages/Signup";
import AboutUs from "pages/AboutUs";
import Pricing from "pages/Pricing";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<RestaurantLandingPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/price" element={<Pricing />} />
        </Routes>
      </Router>
    </>
  );
}
