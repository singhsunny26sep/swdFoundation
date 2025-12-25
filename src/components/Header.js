import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xl">🌱</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SWDF Foundation</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                isActive('/') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors duration-200 ${
                isActive('/about') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`font-medium transition-colors duration-200 ${
                isActive('/services') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Programs
            </Link>
            <Link
              to="/gallery"
              className={`font-medium transition-colors duration-200 ${
                isActive('/gallery') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/volunteer"
              className={`font-medium transition-colors duration-200 ${
                isActive('/volunteer') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Volunteer
            </Link>
            <Link
              to="/donate"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Donate
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors duration-200 ${
                isActive('/contact') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-green-600 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;