import React from 'react'
import {
    BrowserRouter as Router, Routes, Route
   } from "react-router-dom";
import LandingPage from './../components/landingpageActivity';
import Dashboard from './../components/dashboard';

import PatientLoginPage from './patient';
import PharmacistLoginPage from './pharmacist';
import PhysicianLoginPage from './physician';
import SignupPage from './signup';


   function App() {
    return (
      <>
        <Router>
           <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/patients/login" element={<PatientLoginPage />} />
                <Route path="/physicians/login" element={<PhysicianLoginPage />} />
                <Route path="/pharmacists/login" element={<PharmacistLoginPage />} />
           </Routes>
        </Router>
      </>
    )
  }
  export default App