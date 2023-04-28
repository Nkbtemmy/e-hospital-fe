import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/patients/signup"
          >
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
