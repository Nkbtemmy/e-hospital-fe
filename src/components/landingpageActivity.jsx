import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Patients</h2>
            <p className="mb-4">
              Find a physician, schedule an appointment, and manage your health records online.
            </p>
            <Link to="/patients/login" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Login
            </Link>
            <Link to="/signup" className="ml-4 border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white">
              Signup
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Physicians</h2>
            <p className="mb-4">
              Manage your patients, appointments, and health records online.
            </p>
            <Link to="/physicians/login" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Login
            </Link>
            <Link to="/signup" className="ml-4 border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white">
              Signup
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Pharmacists</h2>
            <p className="mb-4">
              Manage prescriptions and medication orders online.
            </p>
            <Link to="/pharmacists/login" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Login
            </Link>
            <Link to="/signup" className="ml-4 border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;