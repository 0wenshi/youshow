import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocaleProvider } from './context/LocaleContext';
import { UserProvider } from './context/UserContext';
import './index.css';
import './views/i18n';

// Using dynamic import() to code-split the application
const AboutUs = lazy(() => import('./views/AboutUs/AboutUs'));
const ActorsIntroduction = lazy(
  () => import('./views/ActorsIntroduction/ActorsIntroduction')
);
const MembershipsProgram = lazy(
  () => import('./views/MembershipsProgram/MembershipsProgram')
);
const LandingPage = lazy(() => import('./views/LandingPage/LandingPage'));
const HomePage = lazy(() => import('./views/HomePage/HomePage'));
const PerformancePlans = lazy(
  () => import('./views/PerformancePlans/PerformancePlans')
);
const Login = lazy(() => import('./views/LoginIn/Login'));
const Register = lazy(() => import('./views/SignUp/Register'));
const TalkShow = lazy(() => import('./views/TalkShow/TalkShow'));
const Guidelines = lazy(() => import('./views/Guidelines/Guidelines'));
const Rental = lazy(() => import('./views/Rental/Rental'));
const Recruitment = lazy(() => import('./views/Recruitment/Recruitment'));
const ActorsManagement = lazy(
  () => import('./views/ActorsManagement/ActorsManagement')
);
const EventsManagement = lazy(
  () => import('./views/EventsManagement/EventsManagement')
);
const TicketBooking = lazy(() => import('./views/TicketBooking/TicketBooking'));
const TicketConfirmation = lazy(
  () => import('./views/TicketConfirmation/TicketConfirmation')
);

const Loading = () => (
  <div className="flex items-center justify-center min-h-screen text-xl text-gray-700">
    Loading...
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocaleProvider>
      <UserProvider>
        <Router>
          <Suspense fallback={<Loading />}>
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
              <Route path="/eventsmanagement" element={<EventsManagement />} />
              <Route path="/tickets/:eventId" element={<TicketBooking />} />
              <Route
                path="/confirmation/:orderId"
                element={<TicketConfirmation />}
              />
            </Routes>
          </Suspense>
        </Router>
      </UserProvider>
    </LocaleProvider>
  </React.StrictMode>
);
