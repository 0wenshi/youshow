import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';

import ContactUs from './views/ContactUs/ContactUs';
import ActorsIntroduction from './views/ActorsIntroduction/ActorsIntroduction';
import MembershipsProgram from './views/MembershipsProgram/MembershipsProgram';
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/HomePage/HomePage';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/actors" element={<ActorsIntroduction />} />
        <Route path="/memberships" element={<MembershipsProgram />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
