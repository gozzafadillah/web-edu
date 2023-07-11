import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "../pages/HomePages";
import PetaBencanaPages from "../pages/PetaBencanaPages";
import QuizPages from "../pages/QuizPages";
import EdukasiPages from "../pages/EdukasiPages";
import ContactPages from "../pages/ContactPages";

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/peta-bencana" element={<PetaBencanaPages />} />
        <Route path="/quiz" element={<QuizPages />} />
        <Route path="/edukasi" element={<EdukasiPages />} />
        <Route path="/contact" element={<ContactPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfig;
