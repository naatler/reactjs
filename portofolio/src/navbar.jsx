// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Jika Anda ingin menambahkan styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Website</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;