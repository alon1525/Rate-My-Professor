// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ProfessorPage, { professorLoader } from './Pages/ProfessorPage.jsx';
import Root from './Pages/Root.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import './App.css';
import ReviewForm from './Pages/ReviewForm.jsx';
import SearchPage from './Pages/SearchPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "professor/:name", element: <ProfessorPage />, loader: professorLoader },
      { path: "reviewForm/:name", element: <ReviewForm /> },
      { path: "searchPage/:search", element: <SearchPage />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
