import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './components/AuthPages/LoginPage';

import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
