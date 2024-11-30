import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';

import ContactUs from './views/ContactUs/ContactUs';
import ActorsIntroduction from './views/ActorsIntroduction/ActorsIntroduction';
import MembershipsProgram from './views/MembershipsProgram/MembershipsProgram';
import LandingPage from './views/LandingPage/LandingPage';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/actors-introduction" element={<ActorsIntroduction />} />
        <Route path="/memberships-program" element={<MembershipsProgram />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
