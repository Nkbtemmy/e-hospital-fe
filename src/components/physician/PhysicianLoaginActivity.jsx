import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

function PhysicianLogin() {
  const baseUrl = import.meta.env.VITE_API_URL
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigation = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/auth/login/physicians`, {
        email,
        password,
      });
      localStorage.setItem('access-token', response?.data?.obj?.token);
      navigation('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message);
      swal("Sorry !", err.response?.data?.message || 'Sorry there is technical problem!', "error",{
        buttons: false,
        timer: 3000,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className=" bg-red-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4"  onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange} 
            value={email}
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
            name='password'
            placeholder="********"
             onChange={handleChange} 
            value={password}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            // onClick={handleLogin}
          >
            Sign In
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/signup"
          >
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default PhysicianLogin;
