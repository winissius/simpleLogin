import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Menu = () => (
  <nav className="menu">
    <Link to="/">Registration</Link>
    <Link to="/login">Login</Link>
    <Link to="/contacts">About me</Link>
  </nav>
);

export default Menu;
