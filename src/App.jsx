import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ProfessorPage from './Pages/ProfessorPage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/professor/:name" element={<ProfessorPage />} /> {/* Route for individual professor */}
      </Routes>
    </Router>
  );
}

export default App;
