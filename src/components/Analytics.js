import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <span className="text-xl font-bold text-gray-900">SWDF Foundation</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</Link>
              <Link to="/products" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Products</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Gallery</Link>
              <Link to="/volunteer" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Volunteer</Link>
              <Link to="/donate" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">Donate</Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-red-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Foundation Analytics</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real-time insights into our medical programs, patient care statistics, and impact metrics across India.
          </p>
        </div>
      </section>

      {/* Main Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Key Metrics */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-gray-600 font-medium mb-2">Patients Treated</h3>
            <p className="text-3xl font-bold text-red-600">100,847</p>
            <p className="text-gray-500 text-sm">↗️ +12% this month</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-gray-600 font-medium mb-2">Active Volunteers</h3>
            <p className="text-3xl font-bold text-blue-600">1,245</p>
            <p className="text-gray-500 text-sm">↗️ +8% this month</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-gray-600 font-medium mb-2">Mobile Clinics</h3>
            <p className="text-3xl font-bold text-green-600">52</p>
            <p className="text-gray-500 text-sm">Active across India</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-gray-600 font-medium mb-2">Success Rate</h3>
            <p className="text-3xl font-bold text-purple-600">96.8%</p>
            <p className="text-gray-500 text-sm">Patient satisfaction</p>
          </div>
        </section>

        {/* Charts Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Patient Trends */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-gray-900 text-lg font-semibold mb-4">Monthly Patient Trends</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📈</div>
                <p className="text-gray-600">Patient Care Analytics Chart</p>
                <p className="text-sm text-gray-500 mt-2">Shows monthly patient treatment data</p>
              </div>
            </div>
          </div>

          {/* Program Effectiveness */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-gray-900 text-lg font-semibold mb-4">Program Effectiveness</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <p className="text-gray-600">Medical Program Performance</p>
                <p className="text-sm text-gray-500 mt-2">Success rates by medical program</p>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Coverage */}
        <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg mb-8">
          <h3 className="text-gray-900 text-lg font-semibold mb-4">Regional Coverage</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">25</div>
              <div className="text-gray-600">States Covered</div>
              <div className="text-sm text-gray-500">Across India</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">180+</div>
              <div className="text-gray-600">Districts Reached</div>
              <div className="text-sm text-gray-500">Rural & Urban</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Villages Served</div>
              <div className="text-sm text-gray-500">Remote Areas</div>
            </div>
          </div>
        </section>

        {/* Program Breakdown */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-gray-900 text-lg font-semibold mb-4">Medical Programs Performance</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Free Medical Camps</span>
                <span className="font-semibold text-red-600">12,450 patients</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Emergency Care</span>
                <span className="font-semibold text-blue-600">8,320 patients</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Maternal Health</span>
                <span className="font-semibold text-green-600">5,680 patients</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Pediatric Care</span>
                <span className="font-semibold text-purple-600">9,240 patients</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-gray-900 text-lg font-semibold mb-4">Impact Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Lives Saved</span>
                <span className="font-semibold text-red-600">2,340</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Vaccinations Given</span>
                <span className="font-semibold text-blue-600">15,670</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Health Education Sessions</span>
                <span className="font-semibold text-green-600">1,850</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Community Members Reached</span>
                <span className="font-semibold text-purple-600">78,900</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Help Us Save More Lives</h2>
          <p className="text-red-100 mb-8 text-lg">
            Your support helps us expand our reach and provide healthcare to more communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Donate Now
            </Link>
            <Link to="/volunteer" className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors">
              Join Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Analytics;