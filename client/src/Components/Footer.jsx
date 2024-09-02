// src/Components/Footer.js
import React from 'react';
import '../App.css'; // If you want to add specific styles

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Your University. All rights reserved.</p>
    </footer>
  );
}
