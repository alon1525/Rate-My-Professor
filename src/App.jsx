import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ProfessorPage from './Pages/ProfessorPage.jsx';
import Root from './Pages/Root.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import './App.css';
import ReviewForm from './Pages/ReviewForm.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="professor/:name" element={<ProfessorPage />} />
          <Route path="*" element={<ErrorPage />} /> {/* Catch-all route for errors */}
          <Route path="reviewForm/:name" element={<ReviewForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
