import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <h3 className="text-2xl font-bold">SWDF Foundation</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Providing accessible, quality healthcare to underserved communities through free medical camps, 
              emergency care, and health education programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <span className="text-xl">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-red-400 transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Medical Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Medical Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  Free Medical Camps
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  Emergency Care
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  Maternal Health
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  Mobile Clinics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  Health Education
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-4">Health Updates</h4>
            <p className="text-gray-400 mb-4">Subscribe for updates on our medical camps and health programs.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-lg focus:outline-none focus:border-red-500"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <span className="text-red-400 mr-3">📍</span>
              <div>
                <p className="text-white font-medium">Medical Center</p>
                <p className="text-gray-400">123 Health Street, Care City, India</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-red-400 mr-3">📞</span>
              <div>
                <p className="text-white font-medium">Emergency Line</p>
                <p className="text-gray-400">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-red-400 mr-3">✉️</span>
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400">info@healthcarefoundation.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 SWDF Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
              Patient Rights
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;