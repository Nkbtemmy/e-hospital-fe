import React from 'react'
import {
    BrowserRouter as Router, Routes, Route
   } from "react-router-dom";
import LandingPage from './../components/landingpageActivity';
import SignupActivity from './../components/signupActivity';
import Dashboard from './../components/dashboard';
import PatientLoginActivity from './../components/patient/PatientLoaginActivity';
import PhysicianLogin from './../components/physician/PhysicianLoaginActivity';
import PharmacistLogin from './../components/pharmacist/PharmacistLoaginActivity';


   function App() {
    return (
      <>
        <Router>
           <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignupActivity />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/patients/login" element={<PatientLoginActivity />} />
                <Route path="/physicians/login" element={<PhysicianLogin />} />
                <Route path="/pharmacists/login" element={<PharmacistLogin />} />
           </Routes>
        </Router>
      </>
    )
  }
  export default App