import React from 'react';
import { FaUser, FaLock, FaPhone, FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-blue-600">HireTech</h1>
        <div className="text-sm">
          <span>Don't have an account?</span>
          <Link to="/register" className=" text-blue-500 cursor-pointer">Register</Link>
        </div>
      </div>

      {/* Register Form */}
      <div className="border-t pt-4">
        <h2 className="text-center text-lg font-semibold mb-4 text-blue-600">Login</h2>

        <div className="flex items-center mb-4">
          <FaUser className="text-2xl text-black" />
          <input 
            type="email"
            placeholder="Email Address"
            className="ml-4 p-2 w-full border-b border-gray-400 outline-none"
          />
        </div>

        <div className="flex items-center mb-4">
          <FaLock className="text-2xl text-black" />
          <input 
            type="password"
            placeholder="Password"
            className="ml-4 p-2 w-full border-b border-gray-400 outline-none"
          />
        </div>

        <button className="bg-blue-600 w-full text-white py-2 rounded-md hover:bg-blue-700">
          Login now
        </button>

        <div className="text-center my-4">
          <span className="text-sm">or Continue with</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8 mb-4">
          <FaGoogle className="text-4xl text-black cursor-pointer" />
          <FaFacebook className="text-4xl text-black cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;