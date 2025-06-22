import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Detect from './pages/detect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detect" element={<Detect />} />
      </Routes>
    </Router>
  );
}

export default App;
