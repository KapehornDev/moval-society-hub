
import React from 'react';
import { AuthCard } from '../components/AuthCard';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-moval-50 to-white p-4">
      <div className="w-full max-w-md">
        <AuthCard type="login" />
      </div>
    </div>
  );
};

export default Login;
