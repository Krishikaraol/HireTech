// src/pages/LoginPage.js

import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
