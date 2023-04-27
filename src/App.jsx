import React from 'react'
import Login from './components/patient/PatientLoaginActivity';
import SignupForm from './components/patient/PatientSignupActivity';
import Dashboard from './components/dashboard';
import {
 BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import PrivateRoute from './components/Router/PrivateRoute';
import LandingPage from './components/landingpageActivity';

function App() {
    return (
      <>
        <Router>
           <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/patients/login" element={<Login />} />
                <Route path="/patients/signup" element={<SignupForm />} />
                {/* <PrivateRoute path="/dashboard" element={<Dashboard />} /> */}
           </Routes>
        </Router>
      </>
    )
  }
  
  export default App