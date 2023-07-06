import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "../pages/HomePages";
import PetaBencanaPages from "../pages/PetaBencanaPages";
import QuizPages from "../pages/QuizPages";

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/peta-bencana" element={<PetaBencanaPages />} />
        <Route path="/quiz" element={<QuizPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfig;
