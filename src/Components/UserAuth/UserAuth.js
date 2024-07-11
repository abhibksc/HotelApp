import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const UserAuth = () => {
  return (
    <div>
      <h1>User Authentication</h1>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<h3>Please select an option.</h3>} />
      </Routes>
    </div>
  );
};

export default UserAuth;
