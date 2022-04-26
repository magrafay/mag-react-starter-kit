import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/landing/Landing';

 const BaseRoutes = () => {
  return (
      <Routes>
        <Route index element={<LandingPage />} />
      </Routes>
  );
};

export default BaseRoutes;
