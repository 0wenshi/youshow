import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocaleProvider } from './context/LocaleContext';
import { UserProvider } from './context/UserContext';
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
import TicketBooking from './views/TicketBooking/TicketBooking';
import TicketConfirmation from './views/TicketConfirmation/TicketConfirmation';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocaleProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/plans" element={<PerformancePlans />} />
            <Route
              path="/actorsintroduction"
              element={<ActorsIntroduction />}
            />
            <Route path="/memberships" element={<MembershipsProgram />} />
            <Route path="/contact" element={<AboutUs />} />
            <Route path="/talkshow" element={<TalkShow />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/rental" element={<Rental />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/actorsmanagement" element={<ActorsManagement />} />
            <Route path="/tickets/:eventId" element={<TicketBooking />} />
            <Route
              path="/confirmation/:orderId"
              element={<TicketConfirmation />}
            />
          </Routes>
        </Router>
      </UserProvider>
    </LocaleProvider>
  </React.StrictMode>
);
