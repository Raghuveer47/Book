import React, { useState } from 'react';


const Navbar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-title">Book Store</h2>
      <form onSubmit={handleSubmit} className="navbar-form">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={handleChange}
          className="navbar-input"
        />
        <button type="submit" className="navbar-button">Search</button>
      </form>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">Home</li>
        <li className="navbar-menu-item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
