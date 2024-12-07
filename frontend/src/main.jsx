import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import ContactUs from './views/ContactUs/ContactUs';
import ActorsIntroduction from './views/ActorsIntroduction/ActorsIntroduction';
import MembershipsProgram from './views/MembershipsProgram/MembershipsProgram';
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/HomePage/HomePage';
import PerformancePlans from './views/PerformancePlans/PerformancePlans';
import Tickets from './views/Tickets/Tickets';
import Login from './views/LoginIn/Login';
import Register from './views/SignUp/Register';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/plans" element={<PerformancePlans />} />
        <Route path="/actors" element={<ActorsIntroduction />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/memberships" element={<MembershipsProgram />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
