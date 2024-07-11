import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Login from './Login';
// import Register from './Register';
import Dashboard from './Pages/Dashboard';

const AdminPanelIndex = () => {
  return (
    <div>
      <h1>User Authentication</h1>
      <Routes>
      <Route path="/" element={<Dashboard/>} />

        {/* <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} /> */}
      </Routes>
    </div>
  );
};

export default AdminPanelIndex;
