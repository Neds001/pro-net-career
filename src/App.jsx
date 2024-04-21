import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import WelcomeSection from './components/Landing/WelcomeSection';
import DiscoverSection from './components/Landing/DiscoverSection';
import JoinSection from './components/Landing/JoinSection';
import Footer from './components/Footer/Footer';
import ForgotPassword from './components/Login/ForgotPassword';
import MainDashboard from './components/Dashboard/MainDashboard';
import Policy from './components/Footer/Policy';
import Explore from './components/Landing/Careers';
import UnderMaintenance from './components/Dashboard/UnderMaintenance';
import Groups from './components/Dashboard/Groups';
import Networks from './components/Dashboard/Networks';
import Profile from './components/Dashboard/Profile';
import FindNetworks from './components/Dashboard/FindNetworks';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Route without Header */}
          <Route path="/signup" element={<JoinSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPass" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/maintenance" element={<UnderMaintenance />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/networks" element={<Networks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/findNetworks" element={<FindNetworks />} />
          {/* Route with Header */}
          <Route path="/*" element={<WithHeader />} />
        </Routes>
      </Router>

    </>
  );
}

function WithHeader() {
  return (
    <>
      <Header />
      {/* This will render the child components of this route */}
      <Routes>
        <Route path="/" element={<WelcomeSection />} />
        {/* Add other routes with header here */}
      </Routes>
      <DiscoverSection />
      <Footer />
    </>
  );
}

export default App;
