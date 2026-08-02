import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomerPage from './pages/CustomerPage';
import AccountPage from './pages/AccountPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CustomerPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </div>
  );
};

export default App;
