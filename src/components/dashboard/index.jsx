import React, { useState, useEffect } from 'react';
import { Router, Route, Routes, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// Components for dashboard options
import Profile from '../patient/PatientLoaginActivity';
import Patients from '../patient/PatientLoaginActivity';
import Pharmacists from '../patient/PatientLoaginActivity';
import ProfilePage from '../profiles/patient';

function Dashboard({ user={
    photo:"html.phone"
} }) {
    const navigate = useNavigate();
    useEffect(() => {
      const accessToken = localStorage.getItem('access-token');
      if (!accessToken) {
        navigate('/');
      }
    }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="flex flex-col h-screen justify-between">
          <div className="flex items-center py-4 px-8">
            {/* User photo */}
            <img className="h-8 w-8 rounded-full" src={user.photo} alt={user.name} />
            {/* User name */}
            <h3 className="ml-2 text-lg">{user.name}</h3>
          </div>
          {/* Navigation links */}
          <nav className="flex flex-col space-y-4">
            <NavLink exact to="/" className="py-2 px-8 bg-gray-900 text-white" activeClassName="bg-gray-700">
              Profile
            </NavLink>
            <NavLink to="/patients" className="py-2 px-8 bg-gray-900 text-white" activeClassName="bg-gray-700">
              Patients
            </NavLink>
            <NavLink to="/pharmacists" className="py-2 px-8 bg-gray-900 text-white" activeClassName="bg-gray-700">
              Pharmacists
            </NavLink>
          </nav>
          {/* Logout button */}
          <div className="py-4 px-8">
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full">
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-100">
            <Routes>
                <Route path="/" element={<ProfilePage />} />
                {/* <Route path="/patients/login" element={<Profile />} />
                <Route path="/patients/signup" element={<Profile />} /> */}
            </Routes>
      </main>
    </div>
  );
}

export default Dashboard;
