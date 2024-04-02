import React, { useState } from 'react';
import './App.css'; // Assuming you have CSS for styling

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>Logo</h1>
          <button className="navbar-toggle" onClick={toggleMenu}>
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>
        <ul className={isOpen ? 'navbar-menu active' : 'navbar-menu'}>
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#services">Services</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="content">
          <h1>responsive navbar menus</h1>
      </div>
    </div>
  );
}

export default App;
