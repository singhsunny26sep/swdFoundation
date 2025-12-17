import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import founderImage from '../img/founder.jpeg';

function Home() {
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
              <Link to="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</Link>
              <Link to="/volunteer" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Volunteer</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Gallery</Link>
              <Link to="/donate" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">Donate</Link>
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

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Healing Lives,
            <br />
            <span className="text-red-600">Building Hope</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            SWDF Foundation is dedicated to providing free medical care, health education, and 
            medical support to underserved communities. Join us in making quality healthcare accessible to all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Donate Now
            </Link>
            <Link to="/volunteer" className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors">
              Join Medical Team
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-2">100,000+</div>
              <div className="text-gray-600 font-medium">Patients Treated</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Medical Volunteers</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Mobile Clinics</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">25</div>
              <div className="text-gray-600 font-medium">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-red-600">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, quality healthcare to underserved communities through free medical camps, 
                mobile clinics, health education, and emergency medical services. We believe healthcare is a 
                fundamental human right.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-blue-600">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every individual has access to quality healthcare regardless of their economic status. 
                We envision healthy communities where preventive care and medical support are available to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Medical Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-red-600">🏥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Medical Camps</h3>
              <p className="text-gray-600 mb-4">Comprehensive health checkups and treatment for underserved communities</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• General health screenings</li>
                <li>• Specialist consultations</li>
                <li>• Free medicines distribution</li>
                <li>• Health awareness programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-blue-600">🚑</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Care</h3>
              <p className="text-gray-600 mb-4">24/7 emergency medical services and ambulance support</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 24/7 emergency hotline</li>
                <li>• Mobile ambulance service</li>
                <li>• Critical care support</li>
                <li>• Hospital referral system</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-green-600">👶</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maternal Health</h3>
              <p className="text-gray-600 mb-4">Specialized care for pregnant women and newborn babies</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Prenatal care programs</li>
                <li>• Safe delivery services</li>
                <li>• Neonatal care</li>
                <li>• Postnatal support</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <p className="text-gray-600 mb-4 italic">
                "The mobile clinic saved my daughter's life when she had a high fever. The doctors were 
                professional and caring. We're forever grateful to SWDF Foundation."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold">PK</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Priya Kumar</p>
                  <p className="text-gray-500 text-sm">Mother, Rural Village</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <p className="text-gray-600 mb-4 italic">
                "As a diabetic patient, I couldn't afford regular checkups. The free medical camp provided 
                me with medicines and taught me how to manage my condition."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">RS</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Rajesh Singh</p>
                  <p className="text-gray-500 text-sm">Patient, Urban Slum</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <p className="text-gray-600 mb-4 italic">
                "The maternal health program helped me have a safe delivery. The doctors and nurses 
                provided excellent care throughout my pregnancy."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">SM</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Sunita Mishra</p>
                  <p className="text-gray-500 text-sm">Mother, Remote Village</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Medical Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-28 h-28 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img
                  src={founderImage}
                  alt="Dr. Sanjay Gupta - Chief Medical Officer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Sanjay Gupta</h3>
              <p className="text-red-600 font-medium mb-2">Chief Medical Officer</p>
              <p className="text-gray-600 text-sm">25+ years in emergency medicine and public health</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-blue-600">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Meera Sharma</h3>
              <p className="text-red-600 font-medium mb-2">Pediatric Specialist</p>
              <p className="text-gray-600 text-sm">MBBS, MD Pediatrics - 15 years experience</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-green-600">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Vikram Rao</h3>
              <p className="text-red-600 font-medium mb-2">Emergency Medicine</p>
              <p className="text-gray-600 text-sm">Emergency Medicine Specialist - 12 years experience</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-purple-600">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Kavita Patel</h3>
              <p className="text-red-600 font-medium mb-2">Maternal Health</p>
              <p className="text-gray-600 text-sm">Gynecologist & Obstetrician - 18 years experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Save Lives Today</h2>
          <p className="text-red-100 mb-8 text-lg">
            Your support helps us provide life-saving medical care to those who need it most. 
            Every donation directly impacts patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Donate Now
            </Link>
            <Link to="/volunteer" className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors">
              Join Medical Team
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
