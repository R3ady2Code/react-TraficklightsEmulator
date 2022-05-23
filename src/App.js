import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Red from './lighter/Red';
import Yellow from './lighter/Yellow';
import Green from './lighter/Green';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/red" replace />} />
        <Route path="/red" element={<Red />} />
        <Route path="/yellow" element={<Yellow />} />
        <Route path="/green" element={<Green />} />
      </Routes>
    </>
  );
}

export default App;
