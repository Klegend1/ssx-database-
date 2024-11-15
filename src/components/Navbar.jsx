import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">SSX Games</h1>
        <ul className="flex space-x-6 text-white">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/games" className="hover:text-gray-400">Games</Link></li>
          <li><Link to="/characters" className="hover:text-gray-400">Characters</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

