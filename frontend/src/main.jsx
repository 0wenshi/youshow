import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './views/i18n';

import AboutUs from './views/AboutUs/AboutUs';
import ActorsIntroduction from './views/ActorsIntroduction/ActorsIntroduction';
import MembershipsProgram from './views/MembershipsProgram/MembershipsProgram';
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/HomePage/HomePage';
import PerformancePlans from './views/PerformancePlans/PerformancePlans';
import Login from './views/LoginIn/Login';
import Register from './views/SignUp/Register';
import TalkShow from './views/TalkShow/TalkShow';
import Guidelines from './views/Guidelines/Guidelines';
import Rental from './views/Rental/Rental';
import Recruitment from './views/Recruitment/Recruitment';
import ActorsManagement from './views/ActorsManagement/ActorsManagement';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/plans" element={<PerformancePlans />} />
        <Route path="/actorsintroduction" element={<ActorsIntroduction />} />
        <Route path="/memberships" element={<MembershipsProgram />} />
        <Route path="/contact" element={<AboutUs />} />
        <Route path="/talkshow" element={<TalkShow />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/actorsmanagement" element={<ActorsManagement />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
