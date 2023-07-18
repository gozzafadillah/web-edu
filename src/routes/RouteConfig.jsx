import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "../pages/HomePages";
import PetaBencanaPages from "../pages/PetaBencanaPages";
import QuizPages from "../pages/QuizPages";
import EdukasiPages from "../pages/EdukasiPages";
import ContactPages from "../pages/ContactPages";
import DetailEdukasiPages from "../pages/DetailEdukasiPages";
import { Analytics } from "@vercel/analytics/react";
import AboutUsPages from "../pages/AboutUsPages";

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/peta-bencana" element={<PetaBencanaPages />} />
        <Route path="/quiz" element={<QuizPages />} />
        <Route path="/edukasi" element={<EdukasiPages />} />
        <Route path="/contact" element={<ContactPages />} />
        <Route path="/edukasi/:name" element={<DetailEdukasiPages />} />
        <Route path="/about-us" element={<AboutUsPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfig;
